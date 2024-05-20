import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'
import BlowOut from './BlowOut'
import Makeup from './Makeup'
import { useDispatch, useSelector } from 'react-redux'
import { FindTreatments, showAddOns } from '../../../redux/actions/userActions'
import { useNavigation } from '@react-navigation/native'
import Addonsmodal from './Addonsmodal'

const Homebody = () => {

  const [activeTab,setActiveTab]=useState('Blow Out')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const {access_token,find_treatments} = useSelector(state=>state.token)
  const {addons_modal_visible} = useSelector(state => state.customer)

  const blowupTreatments = find_treatments && find_treatments.filter(treatment => treatment.Category.ID === 52);
  const makeupTreatments = find_treatments && find_treatments.filter(treatment => treatment.Category.ID === 104);
  const renderModal =()=>
  {
    return(
      <Modal visible={addons_modal_visible} animationType='slide' transparent={true} >
         <Addonsmodal navigation={navigation} onPress={()=>dispatch(showAddOns(false))}/>
  
      </Modal>
    )
  
  }
    
  

  
  useEffect(()=>
  {
    console.log('ACCESSTOKEN before find treatments', access_token)
     dispatch(FindTreatments(access_token,navigation))
  },[])
  return (
    <View style={styles.bodycontainer}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabContainer, {borderBottomColor : activeTab == 'Blow Out' ? COLOR.PrimaryColor : 'transparent'}]} onPress={()=> setActiveTab('Blow Out')}>
          <Text style={[styles.tabText, {color : activeTab == 'Blow Out' ? COLOR.black : COLOR.LightGrey}]}>Blow Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer,{borderBottomColor : activeTab == 'Make Up' ? COLOR.PrimaryColor : 'transparent'} ]} onPress={()=> setActiveTab('Make Up')}>
        <Text style={[styles.tabText, {color : activeTab == 'Make Up' ? COLOR.black : COLOR.LightGrey}]}>Make Up</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Blow Out' ?
      <>
        { blowupTreatments && <BlowOut items={blowupTreatments} key={blowupTreatments}/> } 
        </>
        :
       <>
        { makeupTreatments && <Makeup items={makeupTreatments} key={makeupTreatments} /> }
        </>
    }
     {renderModal()}
    </View>
  )
}

export default Homebody

const styles = StyleSheet.create({

  bodycontainer:
  {
     marginTop:hp(2),
     flex:1
  },

  tabBar:
  {
    justifyContent:'space-around',
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
  },
  tabContainer:
  {

    borderBottomColor:COLOR.PrimaryColor,
    borderBottomWidth:2,
    width:'45%',
    justifyContent:'center',
    alignItems:'center',
    height:hp(5),
    gap:131,
    paddingHorizontal:12,
    paddingVertical:8,

  },
  tabText:
  {
     color:COLOR.Dark,
     fontWeight:'700',
     fontSize:16,
     lineHeight:22,
     textAlign:'center',
     fontFamily:'Agrandir-TextBold'
  }
})