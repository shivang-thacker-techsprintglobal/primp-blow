import { StyleSheet,  Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {COLOR} from '../constants/Colors';
import Homeicon from '../assets/svgs/homegrey'
import CalenderIcon from '../assets/svgs/Calendargrey'
import InformationIcon from '../assets/svgs/informationgrey'
import UserIcon from '../assets/svgs/Usergrey'
import About from '../screens/About';
import Profile from '../screens/Profile';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Orders from '../screens/Orders';

const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
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
            <Homeicon color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'My Orders',
          tabBarLabelStyle: styles.labelStyle,
          tabBarInactiveTintColor: COLOR.LightGrey,
          tabBarActiveTintColor: COLOR.PrimaryColor,
          tabBarIcon: ({color, size}) => (
            <CalenderIcon color={color}/>
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
            <InformationIcon color={color}/>
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
            <UserIcon color={color}/>
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
