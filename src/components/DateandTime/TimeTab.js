import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'
import TimeSlots from './TimeSlots'





const TimeTab = () => {

  const [activeTab,setActiveTab]=useState('Morning')
  return (
    <View style={styles.bodycontainer}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabContainer, {borderBottomColor : activeTab == 'Morning' ? COLOR.PrimaryColor : 'transparent'}]} onPress={()=> setActiveTab('Morning')}>
          <Text style={[styles.tabText, {color : activeTab == 'Morning' ? COLOR.black : COLOR.LightGrey}]}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer,{borderBottomColor : activeTab == 'Afternoon' ? COLOR.PrimaryColor : 'transparent'} ]} onPress={()=> setActiveTab('Afternoon')}>
        <Text style={[styles.tabText, {color : activeTab == 'Afternoon' ? COLOR.black : COLOR.LightGrey}]}>Afternoon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer,{borderBottomColor : activeTab == 'Evening' ? COLOR.PrimaryColor : 'transparent'} ]} onPress={()=> setActiveTab('Evening')}>
        <Text style={[styles.tabText, {color : activeTab == 'Evening' ? COLOR.black : COLOR.LightGrey}]}>Evening</Text>
        </TouchableOpacity>
      </View>

     <TimeSlots/>

      
    </View>
  )
}

export default TimeTab

const styles = StyleSheet.create({

  bodycontainer:
  {
     marginTop:hp(2),
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
    width:'33%',
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