import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const AboutButtons = ({children, onPress, buttonstyle, textstyle, title}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonstyle]} onPress={onPress}>
      <View style={styles.content}>
        {children}
        <Text style={[styles.buttonTitle, textstyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AboutButtons

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    alignContent: 'center',
    borderWidth: 1,
    padding: 14,
    borderColor: COLOR.PrimaryColor,
    height: hp(6.1),
    justifyContent: 'center',
    flexDirection: 'row',
    width:wp(87)
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonTitle: {
    fontFamily: 'Agrandir-Regular',
    fontWeight: '700',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.Dark,
    marginLeft: 8 // Adjust as needed to add spacing between children and text
  }
})
