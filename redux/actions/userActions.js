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
    dispatch({ type: 'START_LOADING' });
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
      dispatch({ type: 'STOP_LOADING' }); 

      if(response?.data.ErrorCode === 0)
      {
        Alert.alert('Register','Registered Successfully')

        navigation.navigate('Signin')

      dispatch({
        type: 'CUSTOMER_ID',
        payload: response?.data?.CustomerID
      });}

      else if (response?.data.ErrorCode === 13){
        Alert.alert('Register',`${response.data.ErrorMessage}`)
      }

      else{
        Alert.alert('Register',`${response.data.ErrorMessage} :${response?.data?.ArgumentErrors[0]?.ErrorMessage} `)
      }
      
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
  }
};

export const Login = (Email,Password,navigation) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
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
    if (response?.data.error === null ) {
      dispatch({ type: 'STOP_LOADING' }); 

      console.log(response?.data)

     
        Alert.alert('Sign in','Sign in Successfully')

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
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Sign in','Your email or password is incorrect')
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
  }
};

export const GetNearLocations = (access_token) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await axios.get(
      `${BASE_URL}/v4.1/customer/location/3749?access_token=${access_token}`,
      
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data.ErrorCode === 0 ) {
      dispatch({ type: 'STOP_LOADING' }); 

      console.log(response?.data)

     
        Alert.alert('Location fetched successfully')

        

      dispatch({
        type: 'GET_NEAR_LOCATIONS',
        payload: response?.data
      });
      

      
      
      
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Location is not fetched')
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
  }
};

export const GetALlLocations = (access_token) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/locations`,
      {
        BrandAccountName: "",
        access_token: access_token
       
      },
      
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data.ErrorCode === 0 ) {
      dispatch({ type: 'STOP_LOADING' }); 

      console.log('alllocations',response?.data)

     
        Alert.alert('ALl Location fetched successfully')

        

      dispatch({
        type: 'GET_ALL_LOCATIONS',
        payload: response?.data
      });
      

      
      
      
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Location is not fetched')
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
  }
};



//custom states

export const homeAddress = value => dispatch => {
  dispatch({
    type: 'HOME_ADDRESS',
    payload: value,
  });
};






