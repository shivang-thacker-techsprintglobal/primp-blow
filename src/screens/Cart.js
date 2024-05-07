import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { COLOR } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation =useNavigation()
  const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
     <Header title={'Cart'} navigation={navigation}/>
     

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.white,
    padding:wp(4)
  }
})