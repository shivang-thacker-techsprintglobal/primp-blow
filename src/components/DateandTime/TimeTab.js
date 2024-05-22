import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'

import Afternooon from './Afternooon'
import Morning from './Morning'
import { useSelector } from 'react-redux'
import Evening from './Evening'
import moment from 'moment'





const TimeTab = () => {

  const {get_date_appointment, time_slots} = useSelector(state=>state.customer)

  const [activeTab,setActiveTab]=useState('Morning')
  const [morningslots,setMorningSlots]=useState([])
  const [afternoonslots,setAfternoonSlots]=useState([])
  const [eveningslots,setEveningSlots]=useState([])

  useEffect(() => {
    const morning = [];
    const afternoon = [];
    const evening = [];

    time_slots?.forEach(async(item) => {
      const dateTimeWithoutOffset = item?.startDateTime.slice(0, -6);
      const parsedDateTime = moment(dateTimeWithoutOffset, 'YYYY-MM-DDTHH:mm:ss');
      const time =  parsedDateTime.format('hh:mm A');

      if (parsedDateTime.isBefore(parsedDateTime.clone().set({ hour: 12, minute: 0, second: 0, millisecond: 0 }))) {
        morning.push(time);
      } else if (parsedDateTime.isBetween(
        parsedDateTime.clone().set({ hour: 12, minute: 0, second: 0, millisecond: 0 }),
        parsedDateTime.clone().set({ hour: 16, minute: 0, second: 0, millisecond: 0 })
      )) {
        afternoon.push(time);
      } else {
        evening.push(time);
      }
    });

    setMorningSlots(morning);
    setAfternoonSlots(afternoon);
    setEveningSlots(evening);
  }, [time_slots]);

  console.log("morning",morningslots)
  console.log("afternoon",afternoonslots)
  console.log("evening",eveningslots)

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

      {activeTab === 'Morning' ?
      <>
        {  <Morning item={morningslots} /> } 
        </>
        :
       <>
        { activeTab === 'Afternoon'? <Afternooon item={afternoonslots}  /> : <Evening item={eveningslots}/> }
        </>
    }
   

      
    </View>
  )
}

export default TimeTab

const styles = StyleSheet.create({

  bodycontainer:
  {
     marginTop:hp(2),
     flex:0.83,
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