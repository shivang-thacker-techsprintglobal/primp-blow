import { StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAddOns, addToCart, removeFromCart } from '../../redux/actions/userActions'
import ButtonCommon from './ButtonCommon'


const HomeCard = ({ item,isLastItem}) => {

  const {items} = useSelector(state => state.cart);

  const dispatch = useDispatch()

  const isItemAdded = items.some(cartItem => cartItem.Name === item.Name);

  const {access_token} = useSelector(state => state.token)

 
  return (
    <View style={[styles.container, isLastItem && styles.lastItemStyle]}>
      <View style={styles.c1}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item?.Name}</Text>
      <Text   style={styles.textTitle}>${item?.Price?.Amount}  </Text>
      </View>
      <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>{item?.Description} </Text>
      <View style={styles.c2}>
      <Text   style={styles.mediumText}>{item?.TotalDuration} Min </Text>
      {!isItemAdded?<ButtonCommon title={'Add'} onPress={ ()=> {
             dispatch(addToCart(item))
            dispatch(FetchAddOns(item,access_token))
          }}/>
          
         
           : <ButtonCommon title={'Added'} buttonstyle={{backgroundColor:COLOR.PrimaryColor}} textstyle={{color:COLOR.white}} onPress={()=>dispatch(removeFromCart(item?.ID)) }/> }
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
    c1:
    {flexDirection:'row', justifyContent:'space-between', alignItems:'center'},

    c2:
    {flexDirection:'row', alignItems:'center', justifyContent:'space-between'},

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

    lastItemStyle:
    {
      marginBottom: hp(14)
    }
})