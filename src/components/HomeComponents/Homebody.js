import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'
import BlowOut from './BlowOut'
import Makeup from './Makeup'

const Homebody = () => {

  const [activeTab,setActiveTab]=useState('Blow Out')
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
        <BlowOut/>
        :
        <Makeup/>  
    }
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
    alignItems:'center'
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
    paddingVertical:8
    

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