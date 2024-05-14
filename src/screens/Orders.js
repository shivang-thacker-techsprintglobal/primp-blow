import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../constants/Colors';
import Header from '../common/Header';

const Orders = () => {
  const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
      <Header navigation={navigation} title={'My Orders'}/>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({

  container:
  {
 flex:1,
 backgroundColor:COLOR.white
  },
})