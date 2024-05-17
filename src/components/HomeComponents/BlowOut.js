import { StyleSheet, Text, View,Modal,ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeCard from '../../common/Homecard'
import Addonsmodal from './Addonsmodal'




const BlowOut = ({item}) => {

  const [openModal,setOpenModal]=useState(false)






  const renderModal =()=>
  {
    return(
      <Modal visible={openModal} animationType='slide' transparent={true} >
         <Addonsmodal onPress={()=>setOpenModal(false) }/>
  
      </Modal>
    )
  
  }

  


  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
       
      {item.map((item,index)=>(
        <HomeCard  item={item} key={item?.ID}  />
      ))}

      {renderModal()}
      
      
    </ScrollView>
  )
}

export default BlowOut

const styles = StyleSheet.create({})