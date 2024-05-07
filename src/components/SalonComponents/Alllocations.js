import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Addressbar from '../../common/Addressbar'

const Alllocations = () => {
  return (
    <View style={styles.container}>
      <Addressbar show={false}/>
      <Addressbar show={false}/>
      <Addressbar show={false}/>
    </View>
  )
}

export default Alllocations

const styles = StyleSheet.create({
    container:
    {
     padding:10,
    }
})