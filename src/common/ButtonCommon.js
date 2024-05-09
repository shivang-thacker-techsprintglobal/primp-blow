import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const ButtonCommon = ({onPress,buttonstyle, textstyle, title}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyles,buttonstyle]} onPress={onPress}>
      <Text style={[styles.buttonTitle, textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCommon

const styles = StyleSheet.create({

    buttonStyles:
    {
        borderRadius:10,
        alignContent:'center',
        borderWidth:1,
        gap:12,
        paddingVertical:10,
        paddingHorizontal:12,
        borderColor:COLOR.PrimaryColor
        
    },
    buttonTitle:
    {

        fontFamily:'Agrandir-Regular',
        fontWeight:'700',
        lineHeight:20,
        fontSize:14,
        textAlign:'center',
        color:COLOR.PrimaryColor

    }
})