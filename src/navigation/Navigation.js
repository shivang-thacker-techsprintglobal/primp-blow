import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {fetchaccessToken} from '../../redux/actions/userActions';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import Register from '../screens/Register';
import Bottomnavigation from './Bottomnavigation';
import Splashscreen from '../screens/Splashscreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Salon from '../screens/Salon';
import Cart from '../screens/Cart';
import OnboardingThree from '../components/OnboardingComponents/OnboardingThree';
import DateandTime from '../screens/DateandTime';
import Pay from '../screens/Pay';
import Success from '../screens/Success';
import AddCard from '../screens/AddCard';
import Personalinformation from '../components/Profile/Personalinformation';
import ChangePassword from '../components/Profile/ChangePassword';
import EditProfile from '../components/Profile/EditProfile';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchaccessToken());
  }, []);

  const initialRouteName = () => {
    console.log('accesstoken in sign in navigation', access_token);

    if (access_token === undefined) {
      if (navigation_path === 'three') {
        return 'OnboardingThree';
      } else if (navigation_path === 'Register') {
        return 'Signin';
      } else {
        return 'OnboardingScreen';
      }
    } else {
      return 'Bottomnavigation';
    }
  };

  const {navigation_path, access_token} = useSelector(state => state.token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName()}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="DateandTime" component={DateandTime} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
        <Stack.Screen name="Salon" component={Salon} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="Personalinformation"
          component={Personalinformation}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
