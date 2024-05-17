import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Location from '../assets/svgs/LocationPin'
import { COLOR } from '../constants/Colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { homeAddress } from '../../redux/actions/userActions'
import { useSelector } from 'react-redux'


const Addressbar = ({show, item}) => {
const navigation = useNavigation()

const { currentlocation}= useSelector(state=> state.customer)

const dispatch = useDispatch()






  return (
    <>
    {/* <Text>{currentlocation.latitude}</Text>
    <Text>{currentlocation.longitude}</Text> */}
    <TouchableOpacity onPress={()=>{
        dispatch(homeAddress(`${item?.Address?.City} - ${item?.BusinessName}, ${item?.Address.State}`))
        navigation.navigate('Bottomnavigation',{item: item})}} style={styles.container}>
        <Location/>
        <View style={styles.c1}>
      <Text numberOfLines={2} style={styles.address}>{item?.Address?.City ? `${item?.Address?.City} - ${item?.BusinessName}, ${item?.Address?.State}` : '...'}</Text>
      {show?  <Text style={styles.miles}>5 Miles</Text> : null}
      </View>
      
    </TouchableOpacity>

<View style={styles.line}></View>
</>
  )
}

export default Addressbar

const styles = StyleSheet.create({
    container:
    {
        flexDirection:'row',
        gap:8,
        padding:8,
        
    },
    c1:
    {
        gap:4
    },
    
    address:
    {
        fontFamily:'Agrandir-Regular',
        fontSize:14,
        fontWeight:'400',
        lineHeight:20,
        textAlign:'left',
        color:COLOR.Dark,
        width:'95%'

       

    },
    miles:
    {
        fontFamily:'Agrandir-TextBold',
        fontSize:14,
        fontWeight:'700',
        lineHeight:20,
        textAlign:'left',
        color:COLOR.Dark
    },
    line:
    {
        borderColor:COLOR.Grey,
        borderWidth:1,
        marginVertical:hp(0.8)

    }
})