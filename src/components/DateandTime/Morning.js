import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeSlots from './TimeSlots'

const Morning = ({item}) => {
  return (
    <View>
      <TimeSlots item={item}/>
    </View>
  )
}

export default Morning

const styles = StyleSheet.create({})