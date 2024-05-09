import { StyleSheet, Text, View,Modal, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import { useDispatch } from 'react-redux'
import { Dummyitems } from '../../assets/Dummyitems'


const BlowOut = () => {

  const dispatch = useDispatch()


  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >

      {Dummyitems.map((item,index)=>(
        <HomeCard  item={item} key={item.id} />
      ))}
      
      
    </ScrollView>
  )
}

export default BlowOut

const styles = StyleSheet.create({})