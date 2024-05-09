import axios from "axios";
import { BASE_URL } from "../store";
import { Alert } from "react-native";


export const navigationPath = value => dispatch => {
  dispatch({
    type: 'NAVIGATION_PATH',
    payload: value,
  });
};



// Cart user Actions

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

//API's

export const fetchaccessToken = () => async dispatch => {
  try {
    const response = await axios.post(
      `${BASE_URL}/v5/auth/connect/token`,
      {
        grant_type: 'client_credentials',
        client_id: 'Q83uJZOCMzPf',
        client_secret: 'v83caaORITqX',
        scope: 'customer'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.status === 200 ) {

      dispatch({
        type: 'TOKEN_FETCH',
        payload: response?.data?.access_token
      });
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

export const createCustomerAndUserAccount = (Firstname,Lastname,Email,Password,phonenumber,fetchedtoken,navigation) => async dispatch => {
  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/customer/account`,
      {
        LocationID: '3749',
        FirstName: Firstname,
        LastName: Lastname,
        Email: Email,
        Password:Password,
        HomePhone:phonenumber,
        access_token:fetchedtoken
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.status === 200 ) {

      if(response?.data.ErrorCode === 0)
      {
        Alert.alert('Registered Successfully')

        navigation.navigate('Signin')

      dispatch({
        type: 'CUSTOMER_ID',
        payload: response?.data?.CustomerID
      });}

      else if (response?.data.ErrorCode === 13){
        Alert.alert(`${response.data.ErrorMessage}`,)
      }

      else{
        Alert.alert(`${response.data.ErrorMessage}`,`${response?.data?.ArgumentErrors[0]?.ErrorMessage}`)
      }
      
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

export const Login = (Email,Password,navigation) => async dispatch => {
  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/customer/login`,
      {
        LocationID: 3749,
        
        Email: Email,
        Password:Password,
        client_id:'Q83uJZOCMzPf',
        client_secret:'v83caaORITqX'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.status === 200 ) {
      console.log(response?.data)

     
        Alert.alert('Login Successfully')

        navigation.navigate('Bottomnavigation')

      dispatch({
        type: 'CUSTOMER_DETAILS',
        payload: response?.data?.Customer
      });
      dispatch({
        type: 'ACCESS_TOKEN',
        payload: response?.data?.access_token
      });

      
      
      
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

