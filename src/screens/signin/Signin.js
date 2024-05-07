import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/svgs/Logo'
import Closeeye from '../../assets/svgs/Closeeye'
import { styles } from './Styles'
import { Text, TextInput , Button} from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { COLOR } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native'


const Signin = () => {

    const navigation = useNavigation()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [textSecure,setTexeSecure]= useState(true)
  return (
    <View style={styles.container} >
      <Logo/>
      <View style={{width:'100%', justifyContent:'space-between', height:'100%'}}> 
        <View style={{width:'100%', marginTop:hp(4) }}>
        <Text variant="headlineLarge" style={{fontWeight:'800', color:COLOR.Dark}}>Hello, Welcome back</Text>
        <Text variant="titleMedium" style={{fontWeight:'100', color:COLOR.DarkGrey}}>Welcome back you’ve been missed!</Text>

        <View style={{gap:hp(3), marginTop: hp(6)}}> 
        <TextInput
      label="Email Address"
      value={email}
      onChangeText={text => setEmail(text)}
      mode='outlined'
      outlineColor={COLOR.greyborderColor}
      activeOutlineColor={COLOR.PrimaryColor}
      placeholderTextColor={COLOR.LightGrey}
      textColor={COLOR.Dark}
      style={{backgroundColor:COLOR.white}}/>
      <View >
    <TextInput
    secureTextEntry={textSecure}
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
      mode='outlined'
      outlineColor={COLOR.greyborderColor}
      activeOutlineColor={COLOR.PrimaryColor}
      placeholderTextColor={COLOR.LightGrey}
      textColor={COLOR.Dark}
      style={{backgroundColor:COLOR.white}}/> 
      <TouchableOpacity style={{position:'absolute', right:wp(3), top:hp(2)}} onPress={()=>setTexeSecure(!textSecure)}>
      <Closeeye/>
      </TouchableOpacity>
      </View>
    <Text variant="bodyLarge" style={{fontWeight:'100', alignSelf:'flex-end', color:COLOR.Dark}}>Forget Password?</Text>

    <Button  mode="contained" disabled={email.trim() === '' || password.trim() === ''} onPress={() => navigation.navigate('Dashboard')} buttonColor={ COLOR.PrimaryColor} textColor={COLOR.white} >
    Sign In
  </Button>
        </View>
        </View>

        <View style={{flexDirection:'row', alignSelf:'center', gap:wp(2)}}>
        <Text variant="bodyLarge" style={{fontWeight:'100',  color:COLOR.Dark, alignSelf:'center'}}>Don’t have an account?</Text>
        <Text variant="bodyLarge" onPress={()=> navigation.navigate('Register')} style={{fontWeight:'100',  color:COLOR.PrimaryColor, alignSelf:'center'}}>Sign Up</Text>
        </View>
      </View>
    </View>
  )
}

export default Signin

