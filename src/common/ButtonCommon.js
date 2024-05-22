import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const ButtonCommon = ({onPress,buttonstyle, textstyle, title,disable}) => {
  return (
    <TouchableOpacity disabled={disable} style={ disable?[styles.disableButtonStyles,buttonstyle] : [styles.buttonStyles,buttonstyle]} onPress={onPress} >
      <Text style={ disable ?[styles.disableButtonTitle, textstyle]: [styles.buttonTitle, textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCommon

const styles = StyleSheet.create({

  disableButtonStyles:
  {
    borderRadius:10,
    alignContent:'center',
    borderWidth:1,
    gap:12,
    paddingVertical:10,
    paddingHorizontal:12,
    borderColor:COLOR.Grey,
    justifyContent:'center'
  },

    buttonStyles:
    {
        borderRadius:10,
        alignContent:'center',
        borderWidth:1,
        gap:12,
        paddingVertical:10,
        paddingHorizontal:12,
        borderColor:COLOR.PrimaryColor,
        justifyContent:'center'
        
    },
    buttonTitle:
    {

        fontFamily:'Agrandir-Regular',
        fontWeight:'700',
        lineHeight:20,
        fontSize:14,
        textAlign:'center',
        color:COLOR.PrimaryColor

    },
    disableButtonTitle:
    {
      fontFamily:'Agrandir-Regular',
        fontWeight:'700',
        lineHeight:20,
        fontSize:14,
        textAlign:'center',
        color:COLOR.fontGrey

    }
})