import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../common/Header';
import Imagecontainer_round from '../../common/Imagecontainer_round';
import CameraIcon from '../../assets/svgs/Camera';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputcommon from '../../common/TextInputcommon';
import DropDown from '../Dropdown/Dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {GetCustomer, UpdateUser} from '../../../redux/actions/userActions';
import {ActivityIndicator} from 'react-native-paper';
import EditIcon from '../../assets/svgs/edit';
import {Button} from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const EditProfile = () => {
  const route = useRoute();

  // Access route parameters
  const { sfirstname, slastname, sphonenumber, semail } = route.params;
 
  const {get_customer, loading} = useSelector(
    state => state.customer,
  );
  const {access_token,customer_id} = useSelector(state => state.token);


  const dispatch = useDispatch();
  const ios = Platform.OS == 'ios';
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState(sfirstname);
  const [lastName, setLastName] = useState(slastname);
  const [phoneNumber, setPhoneNumber] = useState(sphonenumber);
  const [email, setEmail] = useState(semail);


  const validateAndSubmit = () => {


    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Alert.alert('Invalid Email', 'Please enter a valid email address.');
    }

     // Phone number validation
     if (!/^\d{10}$/.test(phoneNumber)) {
      return Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
    }
    {
      
      
      try{
        
        dispatch(UpdateUser(customer_id,3749,firstName,lastName,phoneNumber,email,access_token,navigation))

        
      }
      catch(error)
      {
        console.log('SOmething went wrong')
      }
      }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOR.white}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAvoidingView
          behavior="position"
          style={{backgroundColor: 'white', flex: 1}}>
          <View style={[styles.container, {paddingTop: ios ? top : top + 10}]}>
            <View>
              <Header
                navigation={navigation}
                title={'Edit Profile'}
              />
           
            </View>

           
            
                <View style={styles.c1}>
                  <ImageBackground
                    source={require('../../assets/pngs/Profile_image.png')}
                    style={styles.imageBackground}>
                    <Imagecontainer_round style={styles.iconContainer}>
                      <CameraIcon />
                    </Imagecontainer_round>
                  </ImageBackground>
                  <Text style={styles.profileName}>
                    {sfirstname} {slastname}
                  </Text>
                </View>
                <View style={styles.c2}>
                  <TextInputcommon
                   
                    label={'First Name'}
                    value={ firstName }
                    setValue={setFirstName}
                  />
                  <TextInputcommon
                    
                    label={'Last Name'}
                    value={ lastName }
                    setValue={setLastName}
                  />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <DropDown />
                    <TextInputcommon
                      value={phoneNumber }
                  
                      label={'Phone Number'}
                      setValue={setPhoneNumber}
                      style={{width: '83%'}}
                    />
                  </View>
                  <TextInputcommon
                    value={email}
                    label={'Email'}
                    setValue={setEmail}
                  />
                </View>
             
         
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
     
        <View
          style={{
            flex: 0.1,
            width: wp(87),
            alignSelf: 'center',
            backgroundColor: COLOR.white,
          }}>

            {loading ? <ActivityIndicator color={COLOR.PrimaryColor}/> : <Button
            mode="contained"
            disabled={
              email == semail &&
              firstName == sfirstname &&
              lastName == slastname &&
              phoneNumber == sphonenumber
            }
            onPress={() => validateAndSubmit()}
            buttonColor={COLOR.PrimaryColor}
            textColor={COLOR.white}
            style={styles.buttonStyle}>
            Save
          </Button>}
          
        </View>
     
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: 16,
  },
  c1: {
    height: hp(15.5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
    gap: 12,
  },
  profileName: {
    fontFamily: 'Agrandir-Regular',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    color: COLOR.black,
    textTransform: 'capitalize',
  },
  imageBackground: {
    height: 80,
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconContainer: {height: 30, width: 30, backgroundColor: COLOR.PrimaryColor},
  c2: {
    alignSelf: 'center',
    width: wp(87.3),
    gap: 16,
    marginTop: hp(5),

    //     width: Fixed (344px)px;
    // height: Hug (320px)px;
    // top: 248px;
    // left: 16px;
    // gap: 16px;
    // opacity: 0px;
  },
  buttonStyle: {
    height: hp(6),
    borderRadius: 15,
    width: '100%',
    marginVertical: hp(1),
  },
});
