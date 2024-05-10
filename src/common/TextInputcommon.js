import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR } from '../constants/Colors'

const TextInputcommon = ({secureTextEntry, label,value,setValue,style,numberOfLines,multiline}) => {
  return (
    
      <TextInput
    secureTextEntry={secureTextEntry}
      label={label}
      value={value}
      onChangeText={text => setValue(text)}
      mode='outlined'
      outlineColor={COLOR.greyborderColor}
      activeOutlineColor={COLOR.PrimaryColor}
      placeholderTextColor={COLOR.LightGrey}
      textColor={COLOR.Dark}
      numberOfLines={numberOfLines}
      multiline={multiline}
      
      
      style={[{backgroundColor:COLOR.white, borderRadius:10}, style]}/> 
    
  )
}

export default TextInputcommon

const styles = StyleSheet.create({})