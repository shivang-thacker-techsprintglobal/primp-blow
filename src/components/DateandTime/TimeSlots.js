import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TimeSlotcard from '../../common/TimeSlotcard'
import { useSelector } from 'react-redux'

const TimeSlots = () => {

  const {time_slots} = useSelector(state=> state.customer)

const [data,setData]= useState([1,2,3,4,5,6,7,8,9,10,11,12])

  return (
    <View style={styles.container}> 

    <FlatList
   
    showsVerticalScrollIndicator={true}
    contentContainerStyle={{width:'100%'}}
    numColumns={3}
    data={time_slots}
    renderItem={({item,index})=>
  {
    return(<TimeSlotcard key={index}/>)
  }}

  keyExtractor={(item,index)=> index.toString()}
    />

      
    </View>
  )
}

export default TimeSlots

const styles = StyleSheet.create({

  container:
  {  width:'100%', marginTop:16,marginBottom:hp(8)},

  c1:
  {  gap:12, width:'100%', backgroundColor:'orange',  flex:1, height:'100%'}
    
})