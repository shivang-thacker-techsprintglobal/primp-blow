import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Notification from '../assets/svgs/notification'
const Imagecontainer_round = ({children,onPress,style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default Imagecontainer_round

const styles = StyleSheet.create({

    container:
    {
        borderColor:COLOR.LightGrey,
        height:44,
        width:44,
        borderWidth:wp(0.2),
        borderRadius: wp(9),
        backgroundColor:COLOR.white,
        justifyContent:'center',
        alignItems:'center'


    }
})