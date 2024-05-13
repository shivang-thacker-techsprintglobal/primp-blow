import { StyleSheet, Text, View,Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLOR } from '../constants/Colors';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import RadioButtons from '../common/RadioButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AddcardIcon from '../assets/svgs/AddCard'
import { Button } from 'react-native-paper';

const Pay = () => {
    const navigation = useNavigation()
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
     <Header navigation={navigation} title={'Pay'} />
     <View style={styles.c1}>
        <Text style={styles.reserveText}>Reserve your Booking</Text>
        <View style={styles.cc1}>
<Text style={styles.cardText}>Card</Text>
<RadioButtons/>
        </View>
        <TouchableOpacity style={styles.cc2} onPress={()=>navigation.navigate('AddCard')}>
         <AddcardIcon/>
         <Text style={styles.addCard}>Add Card</Text>
        </TouchableOpacity>

     </View>
     <View style={styles.buttonposition}>
      <Button onPress={()=> navigation.navigate('Success')} mode="contained"  style={{width:'100%', borderRadius:10, backgroundColor:COLOR.PrimaryColor}}> Reserve Booking</Button>
      </View>
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor:COLOR.white,
        padding:16
    },
    c1:
    {
        width:335,
        height:223,
        top:hp(5),
        
        gap:16
    },
    cc1:
    {
       gap:12
    },
    reserveText:
    {
        fontFamily:'Agrandir-TextBold',
        fontWeight:'700',
        fontSize:18,
        lineHeight:28,
        color:COLOR.Dark
    },
    cardText:
    {
        fontFamily:'Agrandir-TextBold',
        fontWeight:'700',
        fontSize:14,
        lineHeight:20,
        color:COLOR.Dark
    },
    cc2:
    {
        width:'100%',
        height:hp(6),
        borderRadius:50,
        padding:14,
        gap:10,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    addCard:
    {
        fontFamily:'Agrandir-Regular',
        fontWeight:'700',
        fontSize:14,
        lineHeight:20,
        alignItems:'center',
        color:COLOR.Dark
    },
    buttonposition:
    {
        position:'absolute', bottom:0,width:'100%', 
        justifyContent:'center',
        alignItems:'center',
        height:80,
        alignSelf:'center'
    },
})