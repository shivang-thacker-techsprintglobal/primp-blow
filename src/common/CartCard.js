import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart, removeSubItemFromCart } from '../../redux/actions/userActions'
import Deleteicon from '../assets/svgs/delete'
import moment from 'moment'
import CalenderIcon from '../assets/svgs/Cart_Calendar'
import TimerIcon from '../assets/svgs/Cart_TImer'



const CartCard = ({onPress, item,index}) => {

    const { items } = useSelector(state => state.cart);
    const {parent_item_id} = useSelector(state=> state.customer)
    const {get_date_appointment,get_time_appointment } = useSelector(state=>state.customer)

    console.log(get_date_appointment)

  const dispatch = useDispatch()


function formatDate(dateString) {
    const date = new Date(dateString);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${dayOfWeek}, ${day}-${month}-${year}`;
}
function formatTime(dateTimeString) {
  const dateTimeWithoutOffset = dateTimeString.slice(0, -6);
  const parsedDateTime = moment(dateTimeWithoutOffset);
  const time = parsedDateTime.format('hh:mm A');

  return time 
}

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
           {get_date_appointment !== '' && get_time_appointment !== '' ?
           <>
              <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <View  style={{width:'50%', flexDirection:'row', gap:4}}>
                  <CalenderIcon/>
              <Text style={styles.datetext}>{formatDate(get_date_appointment)} </Text>
              </View>
              <View style={{borderColor:COLOR.Grey, borderWidth:1, height:hp(1.9)}}></View>
              <View style={{width:'45%', flexDirection:'row', gap:4}}>
                <TimerIcon/>
              <Text style={styles.datetext}>{get_time_appointment}</Text>
              </View>
            
              </View>
              <View style={styles.greyLine} />
              </>
              : null}
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

    },
    c1:
    {flexDirection:'row', justifyContent:'space-between', alignItems:'center'},

    c2:
    {flexDirection:'row', alignItems:'center', justifyContent:'space-between'},

    datetext:
    {

      fontFamily:'Agrandir-TextBold',
      fontSize:13,
      fontWeight:'700',
      lineHeight:16.9,
      textAlign:'left',

    }
})


// npm i react-native-animated-pagination-dots