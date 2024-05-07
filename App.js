import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import Signin from './src/screens/Signin';
import Navigation from './src/navigation/Navigation';


const App = () => {
  return (
    <PaperProvider>
     <Navigation/>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})