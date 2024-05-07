import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import Register from '../screens/Register';
import Bottomnavigation from './Bottomnavigation';
import Splashscreen from '../screens/Splashscreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Salon from '../screens/Salon';
import Cart from '../screens/Cart';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    const {user_access_token} = useSelector((state) => state.token);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {user_access_token === 'Register' ?
        <Stack.Screen name="Register" component={Register} />
        :
        <>
         <Stack.Screen name="Splashscreen" component={Splashscreen} />
         <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      
      <Stack.Screen name="Signinin" component={Signin} />
      <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
      <Stack.Screen name="Salon" component={Salon} />
      <Stack.Screen name="Cart" component={Cart} /></>
      }
     
      
      
      
      
      
      
      
      
      
      
      
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})