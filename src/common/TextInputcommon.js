import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR } from '../constants/Colors'

const TextInputcommon = ({secureTextEntry, label,value,setValue,style}) => {
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
      style={[{backgroundColor:COLOR.white}, style]}/> 
    
  )
}

export default TextInputcommon

const styles = StyleSheet.create({})