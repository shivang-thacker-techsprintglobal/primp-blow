import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/Colors';
import { Text } from 'react-native-paper';
import Imagecontainer_round from '../../common/Imagecontainer_round';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Notification from '../../assets/svgs/notification'
import Cart from '../../assets/svgs/cart'
import Dropdown from '../../assets/svgs/Dropdown'





const Homeheader = () => {
  
    
  return (
    <View style={ styles.container}>
      <View style={styles.c1}>
        <View style={{flexDirection:'row', alignItems:'center'}}> 
      <Text variant="titleLarge" style={{fontWeight:'700', color:COLOR.Dark}}>Shop</Text>
          <Dropdown size={30}/>
      </View>
      <Text variant="bodyMedium" style={{fontWeight:'000', color:COLOR.Dark, fontSize:hp(2.5)}}>Let’s pamper you</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', flex:0.3, marginTop: hp(1)}}>
      
       
        <Imagecontainer_round children={<Notification/>}/>
        <Imagecontainer_round children={<Cart/>}/>
      </View>
    </View>
  )
}

export default Homeheader

const styles = StyleSheet.create({

   container:
   {
      flex:0.13,
      backgroundColor:COLOR.white,
      flexDirection:'row',
   },
   c1:
   {
      flex:0.7,
   }
})