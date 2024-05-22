import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import Homeheader from '../components/HomeComponents/Homeheader';
import {COLOR} from '../constants/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeSearchBar from '../components/HomeComponents/HomeSearchBar';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Homebody from '../components/HomeComponents/Homebody';
import {GetCurrentLocation, getdateAppoinment, gettimeAppointment} from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(getdateAppoinment(''));
    dispatch(gettimeAppointment(''));
    }, [])
  );

  useEffect(() => {
    dispatch(GetCurrentLocation());

   
  }, []);

  const {currentlocation} = useSelector(state => state.customer);

  const ios = Platform.OS == 'ios';
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: ios ? top : top + 10}]}>
      <Homeheader />
      <HomeSearchBar />
      <Homebody />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: wp(4),
  },
});
