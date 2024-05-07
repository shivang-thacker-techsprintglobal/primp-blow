import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/svgs/Logo';
import Closeeye from '../../assets/svgs/Closeeye';
import {styles} from './Styles';
import {Text, TextInput, Button, List, TextInputMask} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../constants/Colors';
import Navigation from '../../navigation/Navigation';
import {useNavigation} from '@react-navigation/native';
import CustomKeyboardView from '../../components/CustomKeyboardView';
import DropDown from '../../components/Dropdown/Dropdown';

const Register = () => {
  const navigation = useNavigation();

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [textSecure, setTexeSecure] = useState(true);
  return (
    <CustomKeyboardView>
      <View style={styles.container}>
        <Logo />
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <View style={{width: '100%', marginTop: hp(4)}}>
            <Text
              variant="headlineLarge"
              style={{fontWeight: '800', color: COLOR.Dark}}>
              Register
            </Text>
            <Text
              variant="titleMedium"
              style={{fontWeight: '100', color: COLOR.DarkGrey, width: '80%'}}>
              Create account so you can explore all the salons
            </Text>

            <View style={{gap: hp(3), marginTop: hp(6)}}>
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
                  <Closeeye />
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  secureTextEntry={textSecure}
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
                  onPress={() => setTexeSecure(!textSecure)}>
                  <Closeeye />
                </TouchableOpacity>
              </View>
              <Text
                variant="bodyLarge"
                style={{
                  fontWeight: '100',
                  alignSelf: 'flex-end',
                  color: COLOR.Dark,
                }}>
                Forget Password?
              </Text>

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
                textColor={COLOR.white}>
                Register
              </Button>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'center', gap: wp(2)}}>
            <Text
              variant="bodyLarge"
              style={{
                fontWeight: '100',
                color: COLOR.Dark,
                alignSelf: 'center',
              }}>
              Forget Password?
            </Text>
            <Text
              variant="bodyLarge"
              onPress={() => navigation.navigate('Signin')}
              style={{
                fontWeight: '100',
                color: COLOR.PrimaryColor,
                alignSelf: 'center',
              }}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default Register;
