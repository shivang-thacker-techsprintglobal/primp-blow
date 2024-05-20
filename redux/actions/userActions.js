import axios from "axios";
import { BASE_URL } from "../store";
import { Alert } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import Snackbar from "react-native-snackbar";



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
       
        

        navigation.navigate('Signin')

      }

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

      dispatch({
        type: 'CUSTOMER_DETAILS',
        payload: response?.data?.Customer
      });
      await dispatch({
        type: 'ACCESS_TOKEN',
        payload: response?.data?.access_token
      });
      dispatch({
        type: 'CUSTOMER_ID',
        payload: response?.data?.Customer?.CustomerID
      });
      navigation.navigate('Bottomnavigation')
      
      
      
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

export const GetALlLocations = (access_token,navigation) => async dispatch => {
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

   

     
        

        

      dispatch({
        type: 'GET_ALL_LOCATIONS',
        payload: response?.data
      });
      

      
      
      
    }

    else if(response?.data?.ErrorMessage=='invalid access token')
    {
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Sign in','Session expired, please Sign in again')
       navigation.navigate('Signin')
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
  }
};
export const FindTreatments = (access_token,navigation) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/treatments`,
      {

        
          LocationID: 3749,
          access_token: access_token,
        
      
      },
     
      
      {
        headers: {
          'Content-Type':'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data?.IsSuccess === true ) {
      dispatch({ type: 'STOP_LOADING' }); 

      dispatch({
        type: 'FIND_TREATMENTS',
        payload: response?.data?.Treatments
      });

      

     
    }
    else if(response?.data?.ErrorMessage=='invalid access token')
    {
      dispatch({ type: 'STOP_LOADING' }); 
      // Alert.alert('Sign in','Session expired, please Sign in again')
      //  navigation.navigate('Signin')
       console.log('error', response?.data)
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      Snackbar.show({
        text: response?.data?.ErrorMessage,
        duration: Snackbar.LENGTH_SHORT,
      });
      console.log(response?.data)
      
      
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
   
  }
};

export const GetCustomer = (id,access_token,navigation) => async dispatch => {
 
  try {
    const response = await axios.get(
      `${BASE_URL}/v4.1/customer/customer/${id}?access_token=${access_token}`,
     
      
      {
        headers: {
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data.ErrorCode === 0 ) {
     

   

     
        

        

      dispatch({
        type: 'GET_CUSTOMER',
        payload: response?.data?.Customer?.Customer
      });
      
    
      
      
      
    }

    else if(response?.data?.ErrorMessage=='invalid access token')
    {
   
      Alert.alert('Profile','Session expired, please Sign in again')
       navigation.navigate('Signin')
       console.log('error in getcustomers',response?.data)
    }
    else{

      console.log('error',response?.data)
      
    }
  } catch (error) {
   
    console.error('Error fetching access token:', error);
   
  }
};

export const FetchAddOns = (item,access_token)=> async dispatch=>
{
try{

  const response = await axios.get(`${BASE_URL}/v4.1/customer/treatment/${item?.ID}/addons?access_token=${access_token}`,
{
  headers : {
    'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275',
},});

if(response?.data?.IsSuccess ===  true)
{

  Snackbar.show({
    text:'api working'
  })
  if(response?.data?.Treatments.length > 0)
  {
       dispatch(showAddOns(true))

       dispatch({
        type: 'ADDONS_DETAILS',
        payload: response?.data?.Treatments
      });
  }
  else{
      
  }
}

else if(response?.data?.ErrorMessage=='invalid access token')
    {
   
      Alert.alert('Sign In','Session expired, please Sign in again')
       navigation.navigate('Signin')
       console.log('error',response?.data)
    }
else
{

  console.log('error',response?.data)
}
}
catch(error){

  console.log('error',error)
}
}

export const UpdateUser = (CustomerID,LocationID,Firstname,Lastname,Homephone,Email,access_token,navigation) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await axios.put(
      `${BASE_URL}/v4.1/customer/customer/${CustomerID}`,
      {

        
          LocationID: LocationID,
        FirstName: Firstname,
        LastName: Lastname,
        HomePhone: Homephone,
        Email: Email,
        access_token:access_token
        
      
      },
     
      
      {
        headers: {
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data?.IsSuccess === true ) {
      dispatch({ type: 'STOP_LOADING' }); 

     
      navigation.navigate('Personalinformation')
      Snackbar.show({
        text: 'Profile Updated',
        duration: Snackbar.LENGTH_SHORT,
      });
     
    
    }


    else if(response?.data?.ErrorMessage=='invalid access token')
    {
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Sign in','Session expired, please Sign in again')
       navigation.navigate('Signin')
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      
      
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
   
  }
};
export const UpdateCustomerPassword = (CustomerID,Email,NewPassword,OldPassword,access_token,navigation) => async dispatch => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/customer/password`,
      {

        
          LocationID: 3749,
          CustomerID: CustomerID,
          Email: Email,
          NewPassword: NewPassword,
          OldPassword: OldPassword,
        access_token:access_token
        
      
      },
     
      
      {
        headers: {
          'Content-Type':'application/json',
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data?.IsSuccess === true ) {
      dispatch({ type: 'STOP_LOADING' }); 

     
      
  
      Snackbar.show({
        text: 'Password Changed Successfully',
        duration: Snackbar.LENGTH_SHORT,
      });

      navigation.navigate('Profile')
    }


    else if(response?.data?.ErrorMessage=='invalid access token')
    {
      dispatch({ type: 'STOP_LOADING' }); 
      Alert.alert('Sign in','Session expired, please Sign in again')
       navigation.navigate('Signin')
    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      Snackbar.show({
        text: response?.data?.ErrorMessage,
        duration: Snackbar.LENGTH_SHORT,
      });
      console.log(response?.data)
      
      
    }
  } catch (error) {
    dispatch({ type: 'STOP_LOADING' }); 
    console.error('Error fetching access token:', error);
   
  }
};
export const Logout = (access_token,navigation) => async dispatch => {

  try {
    const response = await axios.post(
      `${BASE_URL}/v4.1/customer/logout?access_token=${access_token}`,
      {},
     
      
      {
        headers: {
          'Ocp-Apim-Subscription-Key': '180ce46c75d942b0a46bb8a5e8a92275'
        },
      }
    );
    if (response?.data?.IsSuccess === true ) {
      dispatch({ type: 'STOP_LOADING' }); 

      await dispatch({
        type: 'ACCESS_TOKEN',
        payload: undefined
      });
      dispatch({
        type: 'CUSTOMER_ID',
        payload: undefined
      });
     
      navigation.navigate('Signin')
      
      
     
    }

    else if(response?.data?.ErrorMessage=='invalid access token')
    {
      dispatch({ type: 'STOP_LOADING' }); 

    }
    else{
      dispatch({ type: 'STOP_LOADING' }); 
      
      
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

export const GetCurrentLocation = () => async dispatch => {
  try {
    // Check if location permission is granted
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      // If permission granted, get the current location
      Geolocation.getCurrentPosition(
        position => {
          console.log('Current position:', position);
          // Dispatch action to store location in Redux state
          dispatch({
            type: 'CURRENT_LOCATION',
            payload: position.coords, // Store only coordinates in payload
          });
        },
        error => {
          console.error('Error getting current position:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      console.log('Location permission denied');
      // Ask for permission if not granted
      const requestResult = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted after request');
        Geolocation.getCurrentPosition(
          position => {
           
            // Dispatch action to store location in Redux state
            dispatch({
              type: 'CURRENT_LOCATION',
              payload: position.coords, // Store only coordinates in payload
            });
          },
          error => {
            console.error('Error getting current position:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        ); // Get the location after permission is granted
      } else {
        console.log('Location permission denied after request');

        
        Snackbar.show({
          text: 'Please provide location permission for better expirence.',
          duration: Snackbar.LENGTH_SHORT,
          numberOfLines:2
        });
        // Handle permission denied scenario
        // For example, you can show a message to the user
        // or disable functionality that requires location permission.
      }
    }
  } catch (err) {
    console.error('Error checking/requesting location permission:', err);
  }
};

export const showSnackbar = (visible,message) => dispatch => {
  
  
  dispatch({
    type: 'TOAST_VISIBLE',
    payload:visible , // Store only coordinates in payload
  });
 

  dispatch({
    type: 'TOAST_MESSAGE',
    payload:message , // Store only coordinates in payload
  });

  

  
};

export const showAddOns=(visible)=>dispatch=>
{
dispatch({
  type :'ADDONS_MODAL_VISIBLE',
  payload:visible
})

}






