import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR } from '../constants/Colors'

const TextInputcommon = ({secureTextEntry, label,value,setValue,style,numberOfLines,multiline,editable}) => {
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
      editable={editable}
      
      //styleName: Sub-headline Regular;
// font-family: Agrandir;
// font-size: 16px;
// font-weight: 400;
// line-height: 22px;
// text-align: left;

      
      style={[{backgroundColor:COLOR.white, borderRadius:10, fontFamily:'Agrandir-Regular', fontSize:16,fontWeight:'400',lineHeight:22}, style]}/> 
    
  )
}

export default TextInputcommon

const styles = StyleSheet.create({})