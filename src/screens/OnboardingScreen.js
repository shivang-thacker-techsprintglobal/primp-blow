import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import OnboardingOne from '../components/OnboardingComponents/OnboardingOne';
import { Button } from 'react-native-paper';
import { COLOR } from '../constants/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import OnboardingTwo from '../components/OnboardingComponents/OnboardingTwo';
import OnboardingThree from '../components/OnboardingComponents/OnboardingThree';
import { useDispatch } from 'react-redux';
import { navigationPath } from '../../redux/actions/userActions';

const OnboardingScreen = ({ navigation }) => {
const dispatch = useDispatch()

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationDotBottom, setPaginationDotBottom] = useState(new Animated.Value(hp(30))); // Initialize animated value
  const [hideDots,setHideDots] =useState(true)

  useEffect(() => {
    // Animate pagination dots when index changes
    Animated.timing(paginationDotBottom, {
      toValue: currentIndex === 2 ? hp(42) : hp(32), // Change bottom position based on current index
      duration: 100, // Duration of the animation in milliseconds
      useNativeDriver: false, // Make sure to set useNativeDriver to false for bottom style animations
    }).start();
  }, [currentIndex]); // Run the effect whenever currentIndex changes

  const handleSkip = () => {
    setCurrentIndex(2);
    setHideDots(false)
    dispatch(navigationPath('three'))
  };



  return (
    <View style={styles.container}>
      <Swiper

        index={currentIndex}
        style={styles.wrapper}
        loop={false}
        showsPagination={false} // Hide default pagination dots
        onIndexChanged={(index) => setCurrentIndex(index)}
        scrollEnabled={hideDots}
      >
        {/* Onboarding screens */}
        <View style={styles.slide}>
         <OnboardingOne/>
        </View>
        <View style={styles.slide}>
          <OnboardingTwo/>
        </View>
        <View style={styles.slide}>
         <OnboardingThree navigation={navigation}/>
        </View>
      </Swiper>
      {/* Pagination dots */}
      {hideDots? <Animated.View style={[styles.paginationDots, { bottom: paginationDotBottom }]}>
        {[0, 1, 2].map((index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </Animated.View> : null}
      {/* Skip button */}
      {currentIndex !== 2 && (
        <View style={styles.skipButton}>
          <Button  title="Skip" onPress={handleSkip} textColor={COLOR.white}>Skip</Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: wp(3),
    right: 0,
    gap:5
  },
  dot: {
    backgroundColor: COLOR.white,
    width: 8,
    height: 8,
    borderRadius: 4,
 
  },
  activeDot: {
    backgroundColor: COLOR.PrimaryColor,
    width: 20,
    height: 8,
    borderRadius: 4,
  },
});

export default OnboardingScreen;
