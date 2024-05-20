import { StyleSheet, Text, View,Modal,ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import Addonsmodal from './Addonsmodal'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Makeup = ({items}) => {
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
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
       
      {items.map((item,index)=>(
        <HomeCard  item={item} key={item?.ID} onPress={()=>setOpenModal(true)} isLastItem={index === items.length - 1}  />
      ))}

      {renderModal()}
      
      
    </ScrollView>
  )
}

export default Makeup

const styles = StyleSheet.create({})