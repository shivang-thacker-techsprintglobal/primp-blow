import { StyleSheet, Text, View,Modal,ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import Addonsmodal from './Addonsmodal'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'




const BlowOut = ({items}) => {



  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
       
      {items.map((item,index)=>(
        <HomeCard  item={item} key={item?.ID} isLastItem={index === items.length - 1}  />
      ))}

     
      
      
    </ScrollView>
  )
}

export default BlowOut

const styles = StyleSheet.create({})