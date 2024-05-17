import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../common/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Closeeye from '../../assets/svgs/Closeeye';
import TextInputcommon from '../../common/TextInputcommon';
import { ActivityIndicator, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCustomerPassword } from '../../../redux/actions/userActions';

const ChangePassword = () => {
  const ios = Platform.OS == 'ios';
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
 const dispatch= useDispatch()
  const [password, setPassword] = useState();
  const [textSecure, setTexeSecure] = useState(true);
  const [newPassword, setNewPassword] = useState();
  const [newTextSecure, setNewTexeSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmTextSecure, setConfirmTexeSecure] = useState(true);

  const {loading} = useSelector(
    state => state.customer,
  );

  
  const {access_token,customer_id,get_customer} = useSelector(state=>state.token)
  const Email = get_customer?.Email
  const validateAndSubmit = () => {

   

    // Password validation
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/.test(password)) {
      return Alert.alert(
        'Invalid Password',
        'Password must be between 8 and 25 characters long and contain at least one number, one uppercase letter, and one lowercase letter.'
      );
    }


    // Password and Confirm Password validation
    if (newPassword !== confirmPassword) {
      return Alert.alert('Passwords Mismatch', 'Password and Confirm Password must match.');
    }

    if (password === newPassword) {
      return Alert.alert('Passwords Mismatch', 'Password and New Password must not match.');
    }

    // If all validations pass, submit the form or perform other actions
    // You can dispatch an action here, or navigate to another screen, etc.
    // For now, just displaying a success alert
   
dispatch(UpdateCustomerPassword(customer_id,Email,newPassword,password,access_token,navigation))
  };

  return (
    <View style={[styles.container, {paddingTop: ios ? top : top + 10}]}>
      <Header navigation={navigation} title={'Change Password'} />
      <View style={styles.c1}>
      <View style={styles.cc1}>
        <View>
          <TextInputcommon
            secureTextEntry={textSecure}
            label={'Password'}
            value={password}
            setValue={setPassword}
            style={{zIndex: -1}}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTexeSecure(!textSecure)}>
            {textSecure ? (
              <Closeeye />
            ) : (
              <Image
                style={styles.image}
                source={require('../../assets/pngs/eye.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <TextInputcommon
            secureTextEntry={newTextSecure}
            label={'New Password'}
            value={newPassword}
            setValue={setNewPassword}
            style={{zIndex: -1}}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setNewTexeSecure(!newTextSecure)}>
            {newTextSecure ? (
              <Closeeye />
            ) : (
              <Image
                style={styles.image}
                source={require('../../assets/pngs/eye.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TextInputcommon
            secureTextEntry={confirmTextSecure}
            label={'Confirm Password'}
            value={confirmPassword}
            setValue={setConfirmPassword}
            style={{zIndex: -1}}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setConfirmTexeSecure(!confirmTextSecure)}>
            {confirmTextSecure ? (
              <Closeeye />
            ) : (
              <Image
                style={styles.image}
                source={require('../../assets/pngs/eye.png')}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {loading? <View ><ActivityIndicator size={'small'} color={COLOR.PrimaryColor}/></View> :  <Button
            mode="contained"
            disabled={
              (password && password.trim()) === '' ||
              (newPassword && newPassword.trim()) === '' ||
              (confirmPassword && confirmPassword.trim()) === ''
            }
            buttonColor={COLOR.PrimaryColor}
            onPress={() => 
              {validateAndSubmit()
              
              console.log(access_token)
              } }
            textColor={COLOR.white}
            style={styles.buttonStyle}>
            Save
          </Button> }
     
          </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: 16,
  },
  c1:
  {justifyContent:'space-between', flex:1}
  ,
  cc1: {
    width: wp(87),
    gap: 16,
    marginTop:hp(4)
  },
  iconContainer: {position: 'absolute', right: wp(3), top: hp(2), zIndex: -1},

  image: {width: 20, height: 20, tintColor: COLOR.Dark},
  buttonStyle: {
    height: hp(6),
    borderRadius: 15,
    width: '100%',
    marginVertical: hp(1),
  },
});
