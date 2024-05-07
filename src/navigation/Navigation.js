import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/signin/Signin';
import Register from '../screens/register/Register';
import Home from '../screens/Home';
import Bottomnavigation from './Bottomnavigation';
import Splashscreen from '../screens/Splashscreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      
      
      
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Register" component={Register} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})