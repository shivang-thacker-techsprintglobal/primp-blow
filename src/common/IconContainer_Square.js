import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const IconContainer_Square = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default IconContainer_Square

const styles = StyleSheet.create({

    container:
    {
        backgroundColor:COLOR.PrimaryColorLight,
        height: hp(5),
        width : hp(5),
        marginTop: hp(2),
        borderRadius:wp(2.5),
        justifyContent:'center',
        alignItems:'center'

    }
})