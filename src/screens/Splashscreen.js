import React, {useEffect} from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import Logo from '../assets/svgs/Splashscreenlogo'
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {

  const {user_access_token} = useSelector((state) => state.token);

    useEffect(() => {
       
        const timer = setTimeout(() => {
         if(user_access_token === 'three')
          
           { navigation.replace('OnboardingThree') }

           else if(user_access_token === 'Register')
           {
            navigation.replace('Signin')
           }
           
           else{navigation.replace('OnboardingScreen');}
          
        }, 1500); 
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={styles.container}>
      {/* Background image with black overlay */}
      <ImageBackground
        source={require('../assets/pngs/Splashscreen.png')}
        style={styles.backgroundImage}
      ><View style={styles.overlay}></View>
        <Logo />
      </ImageBackground>
      
      
      {/* Company logo centered */}
     
    </View>
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
    justifyContent:'center',
    alignItems:'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // black overlay with 70% opacity
  },
  
});

export default SplashScreen;
