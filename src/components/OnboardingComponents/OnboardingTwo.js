import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Logo from '../../assets/svgs/Onboardinglogo';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native-paper';
import { COLOR } from '../../constants/Colors';

const OnboardingTwo = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background image with gradient overlay */}
      <ImageBackground
        source={require('../../assets/pngs/Onboarding2.png')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'transparent', 'rgba(0, 0, 0, 0.7)']}
          style={styles.overlay}>
          {/* Content inside the overlay */}
          <View style={{ marginTop: hp(4), alignSelf:'center' }}>
            <Logo />
            
          </View>
          <View style={{justifyContent:'flex-end', flex:1, marginBottom:hp(5), padding:wp(3)}}>
          <Text variant="displaySmall" style={{color:COLOR.white}}>Customize Your</Text>
          <Text variant="displaySmall" style={{fontWeight:'800', color:COLOR.white}}>Experience</Text>
      <Text variant="bodyLarge" style={{fontWeight:'100', color:COLOR.white, width:'90%', marginTop:hp(1)}}>With just a few taps, you can book your appointments hassle-free. No more waiting on hold or standing in line!</Text>
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

export default OnboardingTwo;
