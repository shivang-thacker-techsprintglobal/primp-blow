import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'
import Nearme from './Nearme'
import Alllocations from './Alllocations'


const SalonTab = () => {

  const [activeTab,setActiveTab]=useState('Near me')
  return (
    <View style={styles.bodycontainer}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabContainer, {borderBottomColor : activeTab == 'Near me' ? COLOR.PrimaryColor : 'transparent'}]} onPress={()=> setActiveTab('Near me')}>
          <Text style={[styles.tabText, {color : activeTab == 'Near me' ? COLOR.black : COLOR.LightGrey}]}>Near me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer,{borderBottomColor : activeTab == 'All Locations' ? COLOR.PrimaryColor : 'transparent'} ]} onPress={()=> setActiveTab('All Locations')}>
        <Text style={[styles.tabText, {color : activeTab == 'All Locations' ? COLOR.black : COLOR.LightGrey}]}>All Locations</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Near me' ?
        <Nearme/>
        :
       <Alllocations/>
    }

      
    </View>
  )
}

export default SalonTab

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