import { Alert, StyleSheet, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Button,Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/userActions'
import ButtonCommon from './ButtonCommon'


const HomeCard = ({onPress, item}) => {

  


  const {items} = useSelector(state => state.cart);

  const dispatch = useDispatch()

  const isItemAdded = items.some(cartItem => cartItem.title === item.title);

 
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item.title}</Text>
      <Text   style={styles.textTitle}>{item.price}  </Text>
      </View>
      <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>(No Extensions) (luxurious Shampoo & Blowout style)  </Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text   style={styles.mediumText}>{item.time}  </Text>
      {!isItemAdded?<ButtonCommon title={'Add'} onPress={()=>
          {dispatch(addToCart(item))
          }
         
          }/> : <ButtonCommon title={'Added'} buttonstyle={{backgroundColor:COLOR.PrimaryColor}} textstyle={{color:COLOR.white}} onPress={()=>dispatch(removeFromCart(item.id)) }/> }
      </View>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({

    container:
    {
        
        width: '100%',
        borderColor:COLOR.Grey,
        borderWidth:1,
        borderRadius: 10,
        justifyContent:'center',
        marginVertical:hp(2),
        padding:16,
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

    }
})


// npm i react-native-animated-pagination-dots