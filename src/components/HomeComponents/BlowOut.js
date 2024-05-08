import { StyleSheet, Text, View,Modal, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import { COLOR } from '../../constants/Colors'
import Closeicon from '../../assets/svgs/close'
import Imagecontainer_round from '../../common/Imagecontainer_round'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Addonsmodal from './Addonsmodal'



const BlowOut = () => {


  return (
    <View style={{flex:1}}>
      <HomeCard />
      
    </View>
  )
}

export default BlowOut

const styles = StyleSheet.create({})