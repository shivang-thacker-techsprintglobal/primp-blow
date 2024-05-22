import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation/Navigation';
import {Provider, useSelector} from 'react-redux';
import { persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import { COLOR } from './src/constants/Colors';





const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
 
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <PaperProvider>
      <View style={{flex:1, backgroundColor:COLOR.white}}>
     <Navigation/>
     </View>
    </PaperProvider>
    </PersistGate>
    </Provider>

    
  )
}

export default App

const styles = StyleSheet.create({})