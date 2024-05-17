import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import UserIcon from '../assets/svgs/userprofile'
import ArrowRight from '../assets/svgs/Arrow_right'
import { COLOR } from '../constants/Colors'
import LockIcon from '../assets/svgs/lock'
import LogoutIcon from '../assets/svgs/Logout'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../redux/actions/userActions'


const ProfileCard = ({navigation}) => {

  const dispatch = useDispatch()

  const {access_token} = useSelector(state=>state.token)

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
           dispatch(Logout(access_token,navigation))
            console.log('User confirmed logout');
          },
        },
      ],
      { cancelable: false }
    );
  };
    
  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Personalinformation')}>
      <UserIcon/>
      <Text style={styles.textStyle}>Personal Information</Text>
      <ArrowRight/>
    </TouchableOpacity>
    <View style={styles.separator} ></View>
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('ChangePassword')}>
      <LockIcon/>
      <Text style={styles.textStyle} >Change Password</Text>
      <ArrowRight/>
    </TouchableOpacity>
    <View style={styles.separator}></View>
    <TouchableOpacity style={styles.container} onPress={()=> handleLogout()} >
      <LogoutIcon/>
      <Text style={styles.textStyle}>Log Out</Text>
      <ArrowRight/>
    </TouchableOpacity>
    </>
  )
}

export default ProfileCard

const styles = StyleSheet.create({

    container:
    {
        width:wp(87),
        height:hp(4),
        paddingVertical:6,
        paddingHorizontal:12,
        flexDirection:'row',
        alignItems:'center',
        gap:12,
        justifyContent:'space-between'

    },
    textStyle:
    {
       fontFamily:'Agrandir-Regular',
       fontSize:14,
       fontWeight:'400',
       lineHeight:20,
       textAlign:'left',
       width:wp(64.72),
       color:COLOR.Dark
    },
    separator:
    {borderWidth:1, borderColor:COLOR.Grey}
})