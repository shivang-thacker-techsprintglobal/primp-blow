import { StyleSheet, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLOR } from '../constants/Colors'
import { Button, Text } from 'react-native-paper'

const HomeCard = ({title,icon}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text  numberOfLines={2} variant="titleLarge" style={styles.textTitle}>Blowout</Text>
      <Text  variant="titleLarge" style={styles.textTitle}>$60.00  </Text>
      </View>
      <Text  numberOfLines={3} variant="bodySmall" style={[styles.text,{marginTop:hp(0.5)}]}>(No Extensions) (luxurious Shampoo & Blowout style)  </Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text  variant="bodyMedium" style={styles.mediumText}>45 Min  </Text>
      <Button  mode="outlined" onPress={() => navigation.navigate('Signin')} textColor={COLOR.PrimaryColor} style={styles.buttonstyle}>
    Add
  </Button>
      </View>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({

    container:
    {
        
        width: '100%',
        height:null,
        aspectRatio:2.5,
        borderColor:COLOR.LightGrey,
        borderWidth:wp(0.2),
        borderRadius: wp(3),
        justifyContent:'center',
        marginVertical:hp(2),
        paddingHorizontal:wp(4),

    },

    textTitle:
    {
      color:COLOR.Dark,
      width:'70%',
      fontWeight:'700'
    },
    text:
    {
        color:COLOR.Dark,
        width:'70%',
    },
    buttonstyle:
    {
      borderRadius:10,
      borderColor:COLOR.PrimaryColor,
      width:wp(20),
      height:hp(5.5),
      alignContent:'center',
      padding:0,
      includeFontPadding:false,

    },

    mediumText:
    {
      color:COLOR.Dark,
        width:'70%',
        fontWeight:'500'
    }
})