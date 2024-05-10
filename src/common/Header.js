import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import Back from '../assets/svgs/Back'
import { COLOR } from '../constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'



const Header = ({title, navigation}) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.goBack()}> 
       <View style={styles.ic1}>
      <Back/>
      </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:
    {
       backgroundColor:COLOR.white,

    },
    iconContainer:
    {
        position:'absolute',
        zIndex:1,
        left:10,
        width:wp(6),
        height:hp(3),
        justifyContent:'center'
        

    },
    title:
    {
        
        fontFamily:'Agrandir-TextBold',
    fontSize:14,
    fontWeight:'700',
    lineHeight:20,
    textAlign:'center',
    color:COLOR.titlecolor


    }
})