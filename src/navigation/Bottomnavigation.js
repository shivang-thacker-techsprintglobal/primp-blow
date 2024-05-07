import {Alert, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {COLOR} from '../constants/Colors';
import Homeicon from '../assets/svgs/home';
import Homedisabled from '../assets/svgs/homegrey';
import Calendericon from '../assets/svgs/Calendar';
import Booking from '../screens/Booking';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Usericon from '../assets/svgs/user';
import Informationicon from '../assets/svgs/information';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarStyle: styles.tabBar}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: COLOR.LightGrey,
          tabBarActiveTintColor: COLOR.PrimaryColor,
         tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/pngs/home.png')} // Adjust the path to your PNG icon
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: 'My Booking',
          tabBarLabelStyle: styles.labelStyle,
          tabBarInactiveTintColor: COLOR.LightGrey,
          tabBarActiveTintColor: COLOR.PrimaryColor,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/pngs/calendar.png')} // Adjust the path to your PNG icon
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarLabelStyle: styles.labelStyle,
          tabBarInactiveTintColor: COLOR.LightGrey,
          tabBarActiveTintColor: COLOR.PrimaryColor,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/pngs/information.png')} // Adjust the path to your PNG icon
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: styles.labelStyle,
          tabBarInactiveTintColor: COLOR.LightGrey,
          tabBarActiveTintColor: COLOR.PrimaryColor,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/pngs/user.png')} // Adjust the path to your PNG icon
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
  
const styles = StyleSheet.create({
  tabBar: {
    
    bottom: hp(7),
    position: 'absolute',
    backgroundColor: COLOR.bottomNavigation,
    width: '90%',
    borderRadius: 20,
    height: hp(7.7),
    left: '5%',
    right: '5%',
    paddingHorizontal:8,
    elevation:0

    
  },
  labelStyle:
  {
    fontWeight:'700',
    fontSize:10,
    lineHeight:12,
    textAlign:'center',
    fontFamily:'Agrandir-Regular',
    bottom:8
  }
});

export default Bottomnavigation;
