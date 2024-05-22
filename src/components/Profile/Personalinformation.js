import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
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
import {GetCustomer} from '../../../redux/actions/userActions';
import {ActivityIndicator} from 'react-native-paper';
import EditIcon from '../../assets/svgs/edit';
import { useFocusEffect } from '@react-navigation/native';


const Personalinformation = () => {

  

  const { loading} = useSelector(
    state => state.customer,
  );
  const {access_token,customer_id,get_customer} = useSelector(state => state.token);
 

  const dispatch = useDispatch();
  const ios = Platform.OS == 'ios';
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      dispatch(GetCustomer(customer_id, access_token,navigation));
    }, [])
  );

//   useEffect(()=>
// {dispatch(GetCustomer(customer_id, access_token,navigation));
   

// },[])




  return (

          <View style={[styles.container, {paddingTop: ios ? top : top + 10}]}>
            <View>
              <Header
                navigation={navigation}
                title={ 'Personal Information'}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile',{sfirstname:get_customer?.FirstName,slastname:get_customer?.LastName,sphonenumber:get_customer?.HomePhone,semail:get_customer?.Email})}
                style={styles.iconContainer}>
                <EditIcon />
              </TouchableOpacity>
            </View>

                <View style={styles.c1}>
                  <ImageBackground
                    source={require('../../assets/pngs/Profile_image.png')}
                    style={styles.imageBackground}>
                    <Imagecontainer_round style={styles.iconContainer2}>
                      <CameraIcon />
                    </Imagecontainer_round>
                  </ImageBackground>
                  <Text style={styles.profileName}>

                   {get_customer?.FirstName && get_customer?.LastName
    ? `${get_customer.FirstName} ${get_customer.LastName}`
    : 'Loading...'}
                  </Text>
                </View>
                <View style={styles.c2}>
                  <TextInputcommon
                    editable={false}
                    label={'First Name'}
                    value={get_customer?.FirstName? `${get_customer?.FirstName}` : `Loading...`}
                   
                  />
                  <TextInputcommon
                    editable={false}
                    label={'Last Name'}
                    value={get_customer?.LastName ?`${get_customer?.LastName}` : `Loading...` }
                  
                  />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <DropDown />
                    <TextInputcommon
                      value={ get_customer?.HomePhone ? `${get_customer?.HomePhone}` : `Loading...`}
                      editable={false}
                      label={'Phone Number'}
                     
                      style={{width: '83%'}}
                    />
                  </View>
                  <TextInputcommon
                    value={get_customer?.Email ? `${get_customer?.Email}` : `Loading...`}
                    editable={false}
                    label={'Email'}
                   
                  />
                </View>
            
          </View>
       
   
  );
};

export default Personalinformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: 16,
  },

  iconContainer:
  {position: 'absolute', zIndex: 100, right: 20, top:hp(1)}
  ,
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
  iconContainer2: {height: 30, width: 30, backgroundColor: COLOR.PrimaryColor},
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
