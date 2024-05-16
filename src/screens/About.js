import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../constants/Colors';
import Header from '../common/Header';
import About_LOGO from '../assets/svgs/About_Logo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FacebookIcon from '../assets/svgs/Facebook'
import AboutButtons from '../components/About/AboutButtons';


const About = () => {
  const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
      <Header navigation={navigation} title={'About'}/>
      <View style={styles.c1}>
        <View style={styles.cc1}>
      <About_LOGO/>
      <Text style={styles.textStyle}>Join us on social media!</Text>
      </View>
      <View style={styles.cc2}>
      <AboutButtons title={'Facebook'}/>
      <AboutButtons title={'Twitter'}/>
      <AboutButtons title={'Instagram'}/>
      <AboutButtons title={'Pinterest'}/>
      <AboutButtons title={'Our Blogs'}/>
      </View>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

  container:
  {
 flex:1,
 backgroundColor:COLOR.white,
 padding:16
  },
  c1:
  {
    width:wp(87),
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp(5),
    gap:32

  },
  cc1:
  {
    gap:16,
    justifyContent:'center',
    alignItems:'center'
  },
  cc2:
  {
    gap:12
  },
  textStyle:
  {
    fontFamily:'Agrandir-Regular',
    fontSize:18,
    lineHeight:28,
    textAlign:'center',
    fontWeight:'400'
  }
})