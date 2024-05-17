import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/actions/userActions'
import Deleteicon from '../assets/svgs/delete'


const CartCard = ({onPress, item,index}) => {

    const { items } = useSelector(state => state.cart);

  const dispatch = useDispatch()

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       
      <View style={styles.c1}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item.title}</Text>
      <Text   style={styles.textTitle}>{item.price}  </Text>
      </View>
      <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>(No Extensions) (luxurious Shampoo & Blowout style)  </Text>
      <View style={styles.c2}>
      <Text   style={styles.mediumText}>{item.time}  </Text>
      <TouchableOpacity onPress={()=>dispatch(removeFromCart(item.id))}>
      <Deleteicon/>
      </TouchableOpacity>
      </View>
    
      {index !== items.length - 1 && <View style={styles.greyLine} />}
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({

    container:
    {
        gap:8
    },

    textTitle:
    {
      color:COLOR.Dark,
      fontWeight:'700',
      fontFamily:'Agrandir-TextBold',
      fontSize:16,
      lineHeight:22
    },
    buttonstyle:
    {
      borderRadius:10,
      borderColor:COLOR.PrimaryColor,
      width:wp(20),
      height:hp(5.5),
      alignContent:'center',
    },
    addedbuttonstyle:
    {
      borderRadius:10,
      borderColor:COLOR.PrimaryColor,
      width:wp(20),
      height:hp(5.5),
      alignContent:'center',
      backgroundColor:COLOR.PrimaryColor
    },

    mediumText:
    {
      color:COLOR.Dark,
        width:'70%',
        fontWeight:'400',
        fontFamily:'Agrandir-Regular',
        fontSize:12,
        lineHeight:15.6

    },
    greyLine:
    {
        borderWidth:1,
        borderColor:COLOR.Grey,
        marginVertical:hp(1)

    },
    c1:
    {flexDirection:'row', justifyContent:'space-between', alignItems:'center'},

    c2:
    {flexDirection:'row', alignItems:'center', justifyContent:'space-between'}
})


// npm i react-native-animated-pagination-dots