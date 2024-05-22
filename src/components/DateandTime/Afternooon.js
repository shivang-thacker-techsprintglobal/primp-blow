import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeSlots from './TimeSlots'

const Afternooon = ({item}) => {
  return (
    <View>
      <TimeSlots item={item}/>
    </View>
  )
}

export default Afternooon

const styles = StyleSheet.create({})