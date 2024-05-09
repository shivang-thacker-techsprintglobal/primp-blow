import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/userActions'
import Deleteicon from '../assets/svgs/delete'


const CartCard = ({onPress, item}) => {

  const [itemAdded,setItemAdded] = useState(false)

  const dispatch = useDispatch()

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text  numberOfLines={2}  style={[styles.textTitle, {width:'70%'}]}>{item.title}</Text>
      <Text   style={styles.textTitle}>{item.price}  </Text>
      </View>
      <Text  numberOfLines={3}  style={[styles.mediumText,{marginTop:hp(0.5)}]}>(No Extensions) (luxurious Shampoo & Blowout style)  </Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text   style={styles.mediumText}>{item.time}  </Text>
      <TouchableOpacity onPress={()=>dispatch(removeFromCart(item.id))}>
      <Deleteicon/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({

    container:
    {
        width: '100%',
        justifyContent:'center',
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