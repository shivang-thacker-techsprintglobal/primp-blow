import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeSlots from './TimeSlots'

const Evening = ({item}) => {
  return (
    <View>
      <TimeSlots item={item}/>
    </View>
  )
}

export default Evening

const styles = StyleSheet.create({})