import React, {useEffect} from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import Logo from '../assets/svgs/Splashscreenlogo'
import { useSelector } from 'react-redux';
import { fetchaccessToken } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const SplashScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  useEffect(()=>
{
  dispatch(fetchaccessToken())
  
},[])

  

  const {navigation_path,access_token} = useSelector((state) => state.token);

    useEffect(() => {
       
        const timer = setTimeout(() => {


          if(access_token === undefined)
          {
          
          
         if(navigation_path === 'three')
          
           { navigation.replace('OnboardingThree') }

           else if(navigation_path === 'Register')
           {
            navigation.replace('Signin')
           }
           else{navigation.replace('OnboardingScreen');}
          }
          else{
            navigation.replace('Bottomnavigation');
          }
           
           
          
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
