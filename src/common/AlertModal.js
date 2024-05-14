import { StyleSheet, Text, View,Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../constants/Colors'
import { heightPercentageToDP as hp , widthPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import CloseIcon from '../assets/svgs/Alert_close'
import Information from '../assets/svgs/information'
import Imagecontainer_round from './Imagecontainer_round'
import { Positions } from 'react-native-calendars/src/expandableCalendar'

const AlertModal = ({show,setshow}) => {

            

  return (
    <Modal visible={show} animationType='fade' transparent={true} >
       <View style={styles.modalContainer}>
           <View style={styles.alertStyle}>
            <TouchableOpacity onPress={()=> setshow(false)} style={{position:'absolute', alignSelf:'flex-end', right:wp(3),top:hp(1.2)}}>
            <CloseIcon />
            </TouchableOpacity>
            <Imagecontainer_round style={{backgroundColor:COLOR.PrimaryColor,borderWidth:0, height:44,width:44}}>
            <Information color={COLOR.white}/>
            </Imagecontainer_round>
            <Text style={styles.alertText}>To add guests, Please remove the add-on service from your current arrangement!</Text>
           </View>
       </View>

    </Modal>)
}

export default AlertModal

const styles = StyleSheet.create({

    modalContainer:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'

    },
    alertStyle:
    {
        width:wp(87),
        height:hp(21.2),
        backgroundColor:COLOR.white,
        borderRadius:10,
        padding:24,
        gap:10,
        alignItems:'center',
    },
    alertText:
    {
         fontFamily:'Agrandir-TextBold',
         color:COLOR.Dark,
         fontSize:16,
         lineHeight:20.8,
         alignSelf:'center'
    }
})