import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../assets/svgs/Logo';
import Closeeye from '../assets/svgs/Closeeye';
import {Text, TextInput, Button, List, TextInputMask} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../constants/Colors';
import Navigation from '../navigation/Navigation';
import {useNavigation} from '@react-navigation/native';
import CustomKeyboardView from '../components/CustomKeyboardView';
import DropDown from '../components/Dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { useraccesstoken } from '../../redux/actions/userActions';

const Register = () => {

 

  const dispatch = useDispatch()

  useEffect(()=>
  {
  dispatch(useraccesstoken('Register'))
  },[])

  const navigation = useNavigation();

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [textSecure, setTexeSecure] = useState(true);
  const [textSecureConfirm, setTexeSecureConfirm] = useState(true);
  return (
    <CustomKeyboardView>
      <View style={styles.container}>
        <Logo />
        <View
          style={styles.container1}>
          <View style={styles.c1}>
            <View style={{gap:8}}>
            <Text style={styles.header}
              >
              Register
            </Text>
            <Text style={styles.subheader}
              >
              Create an account to explore all nearby locations & services.
            </Text>
            </View>

            <View style={styles.cc1}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <TextInput
                  label="First Name"
                  value={firstName}
                  onChangeText={text => setFirstname(text)}
                  mode="outlined"
                  outlineColor={COLOR.greyborderColor}
                  activeOutlineColor={COLOR.PrimaryColor}
                  placeholderTextColor={COLOR.LightGrey}
                  textColor={COLOR.Dark}
                  style={{backgroundColor: COLOR.white, width: '45%'}}
                />
                <TextInput
                  label="Last Name"
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                  mode="outlined"
                  outlineColor={COLOR.greyborderColor}
                  activeOutlineColor={COLOR.PrimaryColor}
                  placeholderTextColor={COLOR.LightGrey}
                  textColor={COLOR.Dark}
                  style={{backgroundColor: COLOR.white, width: '45%'}}
                />
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <DropDown />
                <TextInput
                  label="Phone Number"
                  value={phoneNumber}
                  onChangeText={text => setPhoneNumber(text)}
                  mode="outlined"
                  outlineColor={COLOR.greyborderColor}
                  activeOutlineColor={COLOR.PrimaryColor}
                  placeholderTextColor={COLOR.LightGrey}
                  textColor={COLOR.Dark}
                  style={{backgroundColor: COLOR.white, width: '83%'}}
                />
              </View>

              <TextInput
                label="Email Address"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                outlineColor={COLOR.greyborderColor}
                activeOutlineColor={COLOR.PrimaryColor}
                placeholderTextColor={COLOR.LightGrey}
                textColor={COLOR.Dark}
                style={{backgroundColor: COLOR.white, zIndex:-1}}
              />
              <View>
                <TextInput
                  secureTextEntry={textSecure}
                  label="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  mode="outlined"
                  outlineColor={COLOR.greyborderColor}
                  activeOutlineColor={COLOR.PrimaryColor}
                  placeholderTextColor={COLOR.LightGrey}
                  textColor={COLOR.Dark}
                  style={{backgroundColor: COLOR.white, zIndex:-1}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: wp(3), top: hp(2), zIndex:-1}}
                  onPress={() => setTexeSecure(!textSecure)}>
                   {textSecure?<Closeeye/>: <Image
        style={{width:20, height:20, tintColor:COLOR.Dark}}
        source={require('../assets/pngs/eye.png')}
        /> }
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  secureTextEntry={textSecureConfirm}
                  label="Confirm Password"
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                  mode="outlined"
                  outlineColor={COLOR.greyborderColor}
                  activeOutlineColor={COLOR.PrimaryColor}
                  placeholderTextColor={COLOR.LightGrey}
                  textColor={COLOR.Dark}
                  style={{backgroundColor: COLOR.white}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: wp(3), top: hp(2)}}
                  onPress={() => setTexeSecureConfirm(!textSecureConfirm)}>
                  {textSecureConfirm?<Closeeye/>: <Image
        style={{width:20, height:20, tintColor:COLOR.Dark}}
        source={require('../assets/pngs/eye.png')}
        /> }
                </TouchableOpacity>
              </View>

              <Button
                mode="contained"
                disabled={
                  email.trim() === '' ||
                  password.trim() === '' ||
                  firstName.trim() === '' ||
                  lastName.trim() === '' ||
                  phoneNumber.trim() === '' ||
                  confirmPassword === ''
                }
                onPress={() => console.log('Pressed')}
                buttonColor={COLOR.PrimaryColor}
                textColor={COLOR.white}
                style={styles.buttonStyle}>
                  
                Register
              </Button>
            </View>
          </View>

         
            <Text style={styles.account}
             >
              Have an account?  <Text style={styles.signup} onPress={()=> navigation.navigate('Signin')}
             >
               Sign In
            </Text>
            </Text>
            
       
        </View>
      </View>
      </CustomKeyboardView>
  );
};

export default Register;

const styles = StyleSheet.create({

  container:
  {
    flex:1,
        alignItems:'center',
        paddingHorizontal: wp(4),
        paddingVertical:hp(8),
        backgroundColor:COLOR.white,
  },
  container1:
  {width:'100%', justifyContent:'space-between', height:'100%'},
  c1:{width: '100%', marginTop: hp(4), gap:20},
  cc1:{gap: 16, marginTop: hp(4)},


  header:{

    fontFamily:'Agrandir-TextBold',
    fontSize:30,
    fontWeight:'700',
    lineHeight:40,
    textAlign:'left',
    color:COLOR.Dark

  },
  subheader:{
    fontFamily:'Agrandir-Regular',
    fontSize:16,
    fontWeight:'400',
    lineHeight:22,
    textAlign:'left',
    color:COLOR.Dark

  },
  forgot:{
    fontFamily:'Agrandir-Regular',
    fontSize:12,
    fontWeight:'400',
    lineHeight:15.6,
    textAlign:'right',
    color:COLOR.Dark

  },
  account:{
    ontFamily:'Agrandir-Regular',
    fontSize:14,
    fontWeight:'400',
    lineHeight:20,
    textAlign:'center',
    color:COLOR.Dark,
    marginTop:hp(1)

  },
  signup:{
    ntFamily:'Agrandir-TextBold',
    fontSize:14,
    fontWeight:'700',
    lineHeight:20,
    textAlign:'left',
    color:COLOR.PrimaryColor

  },

  iconstyle:{position:'absolute', right:wp(3), top:hp(2)},

  buttonStyle:
  {
     height:hp(6),
     borderRadius:10
  }

})


