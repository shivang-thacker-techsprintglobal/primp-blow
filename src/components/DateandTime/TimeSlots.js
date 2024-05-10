import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../constants/Colors'
import TimeSlotcard from '../../common/TimeSlotcard'

const TimeSlots = () => {

const [data,setData]= useState([1,2,3,4,5,6,7,8,9,10,11,12])

  return (
    <View style={{height:20,  width:'100%', marginTop:16}}> 
<View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', gap:12}}>
      {data.map((item,index)=>
    {
        return(<TimeSlotcard key={index}/>)

    })}
    </View>
      
    </View>
  )
}

export default TimeSlots

const styles = StyleSheet.create({
    

})