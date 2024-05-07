import { StyleSheet, View , TouchableOpacity} from 'react-native'
import React from 'react'

import { Text, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'
import Call from '../../assets/svgs/Call'

const DashboardContact = () => {
  return (
    <View style={styles.container}>
      <Text  variant="bodyMedium" style={styles.text}>If you have any inquiries, Get in touch with us.</Text>
      <TouchableOpacity style={styles.callus}   onPress={() => navigation.navigate('Dashboard')}  >
        <Call/>
    <Text style={styles.buttontext}>Call Us</Text>
  </TouchableOpacity>
    </View>
  )
}

export default DashboardContact

const styles = StyleSheet.create({

    container:
    { flex:0.08,
        backgroundColor:COLOR.white,
        borderColor: COLOR.PrimaryColor,
        borderWidth: wp(0.3),
        borderRadius:wp(5),
        paddingHorizontal: wp(2),
        paddingVertical:hp(1),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    text:
    {
        color:COLOR.Dark,
        width:'60%',
        fontWeight:'800'
    },
    callus:{
        backgroundColor:COLOR.PrimaryColor,
        flexDirection:'row',
        paddingHorizontal:wp(3),
        alignItems:'center',
        borderRadius:wp(2),
        paddingVertical:hp(0.8),
        justifyContent:'space-between',
        width:'33%'
    },
    buttontext:
    {
        color:COLOR.white,
        fontSize: hp(2.5),

    }
})