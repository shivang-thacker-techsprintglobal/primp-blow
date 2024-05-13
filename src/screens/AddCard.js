import { StyleSheet, Text, View,Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../common/Header'
import { COLOR } from '../constants/Colors'
import TextInputcommon from '../common/TextInputcommon'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Button } from 'react-native-paper';
import CustomKeyboardView from '../components/CustomKeyboardView'

const AddCard = () => {
    const navigation = useNavigation()
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();

  const [cardNumber,setCardNumber] = useState('')
  const [expiryDate,setExpiryDate]=useState('')
  const [cvv,setCvv] = useState('')
  const [holderName,setHolderName] = useState('')
  return (
    
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
    <CustomKeyboardView>
    <Header navigation={navigation} title={'Add Card'}/>
      <View style={styles.c1}>
        <Text style={styles.title}>Enter Card Details</Text>
        <Text style={styles.details}>Your payment information will only be used to hold your appointment</Text>
        <TextInputcommon label={'Card Number'} value={cardNumber} setValue={setCardNumber}/>
        <TextInputcommon label={'Expiry Date'} value={expiryDate} setValue={setExpiryDate}/>
        <TextInputcommon label={'CVV'} value={cvv} setValue={setCvv} secureTextEntry={true}/>
        <TextInputcommon label={'Card Holder Name'} value={holderName} setValue={setHolderName}/>

      </View>
      </CustomKeyboardView>
      <View style={styles.buttonposition}>
      <Button buttonColor={COLOR.PrimaryColor} disabled={cardNumber.trim() === '' ||
                  expiryDate.trim() === '' ||
                  cvv.trim() === '' ||
                  holderName.trim() === ''
                
                  } onPress={()=> navigation.navigate('Pay')} mode="contained"  style={{width:'100%', borderRadius:10}} textColor={COLOR.white}> Add</Button>
      </View>
    </View>



  )
}

export default AddCard

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:COLOR.white,
        padding:16,
    },
    c1:
    {
         gap:24,
         marginTop:hp(3)
    },
    title:
    {
        fontFamily:'Agrandir-TextBold',
        fontWeight:'700',
        fontSize:18,
        lineHeight:28,
        color:COLOR.Dark
    },
    details:
    {
        fontFamily:'Agrandir-Regular',
        fontWeight:'400',
        fontSize:14,
        lineHeight:20,
        color:COLOR.Dark
    },
    buttonposition:
    {
       
    },

})