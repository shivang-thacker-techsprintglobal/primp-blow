import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { COLOR } from '../constants/Colors'
import Checkicon from '../assets/svgs/check'

const Checkbox = () => {
const [ischecked,setIschecked] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={()=> setIschecked(!ischecked)} style={ ischecked? styles.checkboxactivecontainer :styles.checkboxcontainer}>

        {ischecked? <Checkicon/>: null}
        
    
    </TouchableOpacity>

   
    </>
)}

export default Checkbox

const styles = StyleSheet.create({

    checkboxcontainer: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLOR.CheckboxColor,
      },
      checkboxactivecontainer: {
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor:COLOR.PrimaryColor,
        alignItems:'center',
        justifyContent:'center'
      },
})