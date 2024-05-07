import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Notification from '../assets/svgs/notification'
const Imagecontainer_round = ({children}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {children}
    </TouchableOpacity>
  )
}

export default Imagecontainer_round

const styles = StyleSheet.create({

    container:
    {
        borderColor:COLOR.LightGrey,
        height:wp(8),
        width:wp(8),
        borderWidth:wp(0.2),
        borderRadius: wp(9),
        backgroundColor:COLOR.white,
        justifyContent:'center',
        alignItems:'center'


    }
})