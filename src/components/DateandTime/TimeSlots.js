import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TimeSlotcard from '../../common/TimeSlotcard'
import { useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import { COLOR } from '../../constants/Colors'

const TimeSlots = ({item}) => {

  const {loading} = useSelector(state=> state.customer)


  return (
    <View style={styles.container}> 
{loading?
<View style={styles.container}>
<ActivityIndicator size={'small' } color={COLOR.PrimaryColor}/>
</View>
:
<FlatList
   
   showsVerticalScrollIndicator={true}
   contentContainerStyle={{width:'100%'}}
   numColumns={3}
   data={item}
   renderItem={({item,index})=>
 {
   return(<TimeSlotcard item={item} key={index} />)
 }}

 keyExtractor={(item,index)=> index.toString()}
   />
}
    

      
    </View>
  )
}

export default TimeSlots

const styles = StyleSheet.create({

  container:
  {  width:'100%', marginTop:16,marginBottom:hp(8), justifyContent:'center', alignItems:'center'},

  c1:
  {  gap:12, width:'100%', backgroundColor:'orange',  flex:1, height:'100%'}
    
})