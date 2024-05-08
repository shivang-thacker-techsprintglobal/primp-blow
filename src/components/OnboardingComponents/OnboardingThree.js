import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Logo from '../../assets/svgs/Onboardinglogo';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native-paper';
import { COLOR } from '../../constants/Colors';
import { Button } from 'react-native-paper';

const OnboardingThree = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background image with gradient overlay */}
      <ImageBackground
        source={require('../../assets/pngs/Onboarding3.png')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'transparent', 'rgba(0, 0, 0, 0.7)']}
          style={styles.overlay}>
          {/* Content inside the overlay */}
          <View style={styles.c1}>
            <Logo />
            
          </View>
          <View style={styles.c2}>
          <Text style={styles.title1}>Bring Your <Text style={styles.title2}> Loved Ones Along</Text></Text>
          
      <Text style={styles.details}>At Primp & Blow, We believe indulgence is better together. Book appointments for yourself and your loved ones with ease.</Text>
      </View>

      <View style={styles.buttoncontainer}>
      <Button  mode="outlined" onPress={() => navigation.navigate('Signin')} textColor={COLOR.PrimaryColor} style={styles.buttonstyle}>
    Log In
  </Button>
  <Button  mode="contained" onPress={() => navigation.navigate('Register')} textColor={COLOR.white} buttonColor={COLOR.PrimaryColor} style={styles.buttonstyle} >
    Register
  </Button>
      </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  c1:
  { marginTop: hp(4), alignSelf:'center' },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  c2:
  {justifyContent:'flex-end', flex:1, marginBottom:hp(5), padding:wp(3), gap:12},

  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  buttoncontainer:
  {
 justifyContent:'space-around',
 flexDirection:'row',
  },
  buttonstyle:
  {
    height:hp(7),
    width:'40%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:hp(6),
    borderColor:COLOR.PrimaryColor,
    borderRadius:10
  },
  title1:
  {

    fontFamily:'Agrandir-Regular',
    fontSize:30,
    fontWeight:'400',
    lineHeight:40,
    textAlign:'left',
    color:COLOR.white

  },
  title2:
  {
    fontFamily:'Agrandir-TextBold',
    fontSize:30,
    fontWeight:'700',
    lineHeight:40,
    textAlign:'left',
    color:COLOR.white

  },

  details:
  {
    fontFamily:'Agrandir-Regular',
    fontSize:16,
    fontWeight:'400',
    lineHeight:22,
    textAlign:'left',
    color:COLOR.white
   

  }

});

export default OnboardingThree;
