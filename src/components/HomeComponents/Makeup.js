import { StyleSheet, Text, View,Modal } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import Addonsmodal from './Addonsmodal'

const Makeup = () => {
  const [openModal,setOpenModal]=useState(false)

const renderModal =()=>
{
  return(
    <Modal visible={openModal} animationType='slide' transparent={true} >
       <Addonsmodal onPress={()=> setOpenModal(false)}/>

    </Modal>
  )

}
  return (
    <View>
      <HomeCard onPress={()=> setOpenModal(true)}/>
      {renderModal()}
    </View>
  )
}

export default Makeup

const styles = StyleSheet.create({})