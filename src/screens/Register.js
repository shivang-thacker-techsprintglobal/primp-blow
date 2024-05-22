import {StyleSheet, TouchableOpacity, View, Image, Alert,KeyboardAvoidingView,
  ScrollView,} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../assets/svgs/Logo';
import Closeeye from '../assets/svgs/Closeeye';
import {Text, TextInput, Button, List, TextInputMask, ActivityIndicator} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import CustomKeyboardView from '../components/CustomKeyboardView';
import DropDown from '../components/Dropdown/Dropdown';
import { useDispatch,useSelector } from 'react-redux';
import { navigationPath, createCustomerAndUserAccount } from '../../redux/actions/userActions';
import TextInputcommon from '../common/TextInputcommon';



const Register = () => {

  const {token_fetch}=useSelector(state => state.token)
 

  const {loading} = useSelector(state => state.customer);

  const dispatch = useDispatch()

  useEffect(()=>
  {
  dispatch(navigationPath('Register'))
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




  const validateAndSubmit = () => {
    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Alert.alert('Invalid Email', 'Please enter a valid email address.');
    }

    // Password validation
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/.test(password)) {
      return Alert.alert(
        'Invalid Password',
        'Password must be between 8 and 25 characters long and contain at least one number, one uppercase letter, and one lowercase letter.'
      );
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phoneNumber)) {
      return Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
    }

    // Password and Confirm Password validation
    if (password !== confirmPassword) {
      return Alert.alert('Passwords Mismatch', 'Password and Confirm Password must match.');
    }

    // If all validations pass, submit the form or perform other actions
    // You can dispatch an action here, or navigate to another screen, etc.
    // For now, just displaying a success alert
    {dispatch(createCustomerAndUserAccount(firstName,lastName,email,password,phoneNumber,token_fetch,navigation))}
  };
  return (
    
    <ScrollView style = {{flex:1, backgroundColor: COLOR.white}} >
     
    <KeyboardAvoidingView behavior='position' style = {{backgroundColor: COLOR.white, flex: 1}}>
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
                <TextInputcommon label={'First Name'}  value={firstName} setValue={setFirstname} style={{width:'45%'}}/>
                <TextInputcommon label={'Last Name'}  value={lastName} setValue={setLastName} style={{width:'45%'}}/>
                
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <DropDown />
                <TextInputcommon label={'Phone Number'}  value={phoneNumber} setValue={setPhoneNumber} style={{width:'83%'}}/>
              </View>

              <TextInputcommon label={'Email Address'}  value={email} setValue={setEmail} style={{ zIndex:-1}}/>
              <View>
              <TextInputcommon secureTextEntry={textSecure} label={'Password'}  value={password} setValue={setPassword} style={{ zIndex:-1}}/>
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
              <TextInputcommon secureTextEntry={textSecureConfirm} label={'Confirm Password'}  value={confirmPassword} setValue={setConfirmPassword} style={{ zIndex:-1}}/>
                <TouchableOpacity
                  style={{position: 'absolute', right: wp(3), top: hp(2)}}
                  onPress={() => setTexeSecureConfirm(!textSecureConfirm)}>
                  {textSecureConfirm?<Closeeye/>: <Image
        style={{width:20, height:20, tintColor:COLOR.Dark}}
        source={require('../assets/pngs/eye.png')}
        /> }
                </TouchableOpacity>
              </View>
{loading ? <ActivityIndicator color={COLOR.PrimaryColor} size={'small'}/>: <Button
                mode="contained"
                disabled={
                  email.trim() === '' ||
                  password.trim() === '' ||
                  firstName.trim() === '' ||
                  lastName.trim() === '' ||
                  phoneNumber.trim() === '' ||
                  confirmPassword === ''
                }
                onPress={() => validateAndSubmit() }
                buttonColor={COLOR.PrimaryColor}
                textColor={COLOR.white}
                style={styles.buttonStyle}>
                  
                Register
              </Button>}
              
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
      </KeyboardAvoidingView>
      
            </ScrollView>
           
    
     
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
        justifyContent:'space-between',
        
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


