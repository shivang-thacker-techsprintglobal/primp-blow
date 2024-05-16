import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR } from '../../constants/Colors';
import { Text } from 'react-native-paper';
import Imagecontainer_round from '../../common/Imagecontainer_round';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Notification from '../../assets/svgs/notification'
import Cart from '../../assets/svgs/cart'
import Dropdown from '../../assets/svgs/Dropdown'
import LocationPin from '../../assets/svgs/LocationPin'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';





const Homeheader = () => {

  const dispatch=useDispatch()

  const navigation= useNavigation()

 
  
const {homeaddress} = useSelector(state=>state.customer)
    
  return (
    <View style={ styles.container}>
      <TouchableOpacity style={styles.c1} onPress={()=> navigation.navigate('Salon')}>
      <LocationPin/>
      <View >
      
        <View style={styles.cc1}> 
        
      <Text style={styles.textTitle}>Salon</Text>
          <Dropdown size={30}/>
      </View>
      <Text numberOfLines={1}  style={styles.mediumText}>{homeaddress}</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.c2}>
      
       
        <Imagecontainer_round children={<Notification/>} onPress={()=> navigation.navigate('Cart')}/>
       
        <Imagecontainer_round children={<Cart/>} onPress={()=> navigation.navigate('Cart')}/>
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
      gap:12,
      alignItems:'center'
   },
   c1:
   
    {flexDirection:'row', gap:4, flex:0.7}
   ,
   cc1:
   {flexDirection:'row', alignItems:'center', gap:3},
   c2:
   {flexDirection:'row', justifyContent:'space-around', flex:0.3, marginTop: hp(1)},

   mediumText:
    {
      color:COLOR.Dark,
        width:'70%',
        fontWeight:'400',
        fontFamily:'Agrandir-Regular',
        fontSize:14,
        lineHeight:20,
        textAlign:'center'

    },
    textTitle:
    {
      color:COLOR.Dark,
     fontWeight:'700',
     fontSize:14,
     lineHeight:20,
     textAlign:'center',
     fontFamily:'Agrandir-TextBold'
    }
})