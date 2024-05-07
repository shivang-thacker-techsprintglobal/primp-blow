import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Addressbar from '../../common/Addressbar'

const Nearme = () => {
  return (
    <View style={styles.container}>
      <Addressbar show={true}/>
      <Addressbar show={true}/>
      <Addressbar show={true}/>
    </View>
  )
}

export default Nearme

const styles = StyleSheet.create({
    container:
    {
     padding:10,
    }
})