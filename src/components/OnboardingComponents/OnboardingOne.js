import React from 'react';
import { View, StyleSheet, ImageBackground, Platform, StatusBar, SafeAreaView } from 'react-native';
import Logo from '../../assets/svgs/Onboardinglogo';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native-paper';
import { COLOR } from '../../constants/Colors';

const OnboardingOne = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background image with gradient overlay */}
      <ImageBackground
        source={require('../../assets/pngs/Onboarding1.png')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'transparent', 'rgba(0, 0, 0, 0.7)']}
          style={styles.overlay}>
          {/* Content inside the overlay */}
          <View style={{ marginTop: hp(4), alignSelf:'center' }}>
            <Logo />
            
          </View>
          <View style={{justifyContent:'flex-end', flex:1, marginBottom:hp(7), padding:wp(3)}}>
          <Text variant="displaySmall" style={{color:COLOR.white}}>Discover your</Text>
          <Text variant="displaySmall" style={{fontWeight:'800', color:COLOR.white}}>Perfect Salon Match!</Text>
      <Text variant="bodyLarge" style={{fontWeight:'100', color:COLOR.white, width:'90%', marginTop:hp(1)}}>Complete your profile to help you find a salon who will be right for you.</Text>
     
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
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OnboardingOne;
