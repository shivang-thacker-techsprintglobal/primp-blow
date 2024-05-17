import { StyleSheet, Text, View,Modal,ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import Addonsmodal from './Addonsmodal'




const BlowOut = ({item}) => {

  const [openModal,setOpenModal]=useState(false)


  


  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
       
      {item.map((item,index)=>(
        <HomeCard  item={item} key={item?.ID}  />
      ))}

     
      
      
    </ScrollView>
  )
}

export default BlowOut

const styles = StyleSheet.create({})