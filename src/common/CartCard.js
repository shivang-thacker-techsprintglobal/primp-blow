import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart, removeSubItemFromCart } from '../../redux/actions/userActions'
import Deleteicon from '../assets/svgs/delete'


const CartCard = ({onPress, item,index}) => {

    const { items } = useSelector(state => state.cart);
    const {parent_item_id} = useSelector(state=> state.customer)

  const dispatch = useDispatch()

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       
      <View style={styles.c1}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item?.Name}</Text>
      <Text   style={styles.textTitle}>${item?.Price?.Amount}  </Text>
      </View>

      {item?.Description && <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>{item?.Description} </Text>}
      
      <View style={styles.c2}>
      <Text   style={styles.mediumText}>{item?.TotalDuration} Min</Text>
      <TouchableOpacity onPress={()=>dispatch(removeFromCart(item?.ID))}>
      <Deleteicon/>
      </TouchableOpacity>
      </View>

      {
        item?.subItems.length >0 ?
        <>
        {item?.subItems.map((item,index)=>
      {
        return(
          <>
          <View style={styles.greyLine} />
        <View style={styles.c1}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item?.Name}</Text>
      <Text   style={styles.textTitle}>${item?.Price?.Amount}  </Text>
      </View>
      {item?.Description && <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>{item?.Description} </Text>}
      
      <View style={styles.c2}>
      <Text   style={styles.mediumText}>{item?.TotalDuration} Min</Text>
      <TouchableOpacity onPress={()=>dispatch(removeSubItemFromCart(parent_item_id,item?.ID))}>
      <Deleteicon/>
      </TouchableOpacity>
      </View>
      </>)

      })}
        
        </> : null
      }
    
      
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({

    container:
    {
        gap:8,
        borderRadius:10,
        borderWidth:1,
        padding:16,
        gap:12,
        borderColor:COLOR.Grey,
        marginVertical: hp(1)
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