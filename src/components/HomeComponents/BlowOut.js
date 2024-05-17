import { StyleSheet, Text, View,Modal, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import HomeCard from '../../common/Homecard'
import { useDispatch, useSelector } from 'react-redux'
import { Dummyitems } from '../../assets/Dummyitems'
import { useNavigation } from '@react-navigation/native'
import { FindTreatments } from '../../../redux/actions/userActions'


const BlowOut = ({item}) => {



 

  


  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
       
      {item.map((item,index)=>(
        <HomeCard  item={item} key={item.ID} />
      ))}
      
      
    </ScrollView>
  )
}

export default BlowOut

const styles = StyleSheet.create({})