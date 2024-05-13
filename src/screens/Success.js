import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLOR } from '../constants/Colors';
import SuccessIcon from '../assets/svgs/Success'
import ButtonCommon from '../common/ButtonCommon';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Success = () => {
    const navigation = useNavigation()
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
    <View style={styles.c1}> 
      <SuccessIcon/>
      <View>
      <Text style={styles.successText}>Success</Text>
      <Text style={styles.appointmentText}>Your appointment is successfully booked!</Text>
      </View>
      </View>
      <View style={styles.buttonposition}>
      <ButtonCommon onPress={()=> navigation.navigate('Bottomnavigation')} title={'Back to Home'} titleStyle={styles.titleStyle} buttonstyle={styles.buttonStyle} />
      </View>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:COLOR.white,
        padding:16,
        alignItems:'center',
        justifyContent:'center'
    },
    c1:
    {
        gap:9,
        alignItems:'center',
        justifyContent:'center'
    },
    cc1:
    {
      gap:4
    },
    successText:
    {
      fontFamily:'Agrandir-TextBold',
      fontWeight:'700',
      fontSize:30,
      lineHeight:40,
      textAlign:'center',
      color:COLOR.Dark
    },
    appointmentText:
    {
  fontFamily:'Agrandir-Regular',
  fontWeight:'400',
  fontSize:12,
  lineHeight:15.6,
  textAlign:'center',
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
    titleStyle:
    {
      fontSize:16,
      lineHeight:22
    },
    buttonStyle:
    {width:'100%', height:hp(6.1),gap:10}
    

})