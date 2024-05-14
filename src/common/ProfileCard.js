import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import UserIcon from '../assets/svgs/userprofile'
import ArrowRight from '../assets/svgs/Arrow_right'
import { COLOR } from '../constants/Colors'
import LockIcon from '../assets/svgs/lock'
import LogoutIcon from '../assets/svgs/Logout'

const ProfileCard = ({navigation}) => {
    
  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Personalinformation')}>
      <UserIcon/>
      <Text style={styles.textStyle}>Personal Information</Text>
      <ArrowRight/>
    </TouchableOpacity>
    <View style={{borderWidth:1, borderColor:COLOR.Grey}} ></View>
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('ChangePassword')}>
      <LockIcon/>
      <Text style={styles.textStyle} >Change Password</Text>
      <ArrowRight/>
    </TouchableOpacity>
    <View style={{borderWidth:1, borderColor:COLOR.Grey}}></View>
    <TouchableOpacity style={styles.container} >
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
      
      //styleName: Body Regular;
// font-family: Agrandir;
// font-size: 14px;
// font-weight: 400;
// line-height: 20px;
// text-align: left;

    }
})