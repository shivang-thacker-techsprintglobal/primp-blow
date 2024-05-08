import { StyleSheet, TouchableOpacity, View,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import Logo from '../assets/svgs/Logo'
import Closeeye from '../assets/svgs/Closeeye'

import { Text, TextInput , Button} from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { COLOR } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { useraccesstoken } from '../../redux/actions/userActions';
import TextInputcommon from '../common/TextInputcommon';


const Signin = () => {

  const dispatch = useDispatch()

useEffect(()=>
{
dispatch(useraccesstoken('Register'))
},[])

    const navigation = useNavigation()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [textSecure,setTexeSecure]= useState(true)
  return (
    <View style={styles.container} >
      <Logo/>
      <View style={styles.container1}> 
        <View style={styles.c1}>
          <View style={{gap:8}}>
        <Text style={styles.header} >Hello, Welcome back</Text>
        <Text style={styles.subheader} >Welcome back you’ve been missed!</Text>
        </View>

        <View style={styles.cc1}> 
        <TextInputcommon label={'Email Adress'}  value={email} setValue={setEmail}/>
      <View >
    <TextInputcommon label={'Password'} secureTextEntry={textSecure} value={password} setValue={setPassword}/>
      <TouchableOpacity style={styles.iconstyle} onPress={()=>setTexeSecure(!textSecure)}>
        {textSecure?<Closeeye/>: <Image
        style={{width:20, height:20, tintColor:COLOR.Dark}}
        source={require('../assets/pngs/eye.png')}
        /> }
      
      </TouchableOpacity>
      </View>
    <Text style={styles.forgot} >Forget Password?</Text>

  
        </View>

        <Button  mode="contained" disabled={email.trim() === '' || password.trim() === ''} onPress={() => navigation.navigate('Bottomnavigation')} buttonColor={ COLOR.PrimaryColor} textColor={COLOR.white} style={styles.buttonStyle} >
    Sign In
  </Button>
        </View>

     
        <Text style={styles.account} >Don’t have an account? <Text onPress={()=> navigation.navigate('Register')}    style={styles.signup}>  Sign Up</Text></Text>
       
       
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({

  container:
  {
    flex:1,
        alignItems:'center',
        paddingHorizontal: wp(4),
        paddingVertical:hp(8),
        backgroundColor:COLOR.white
  },
  container1:
  {width:'100%', justifyContent:'space-between', height:'100%'},

  c1:{width:'100%', gap:32, marginTop: hp(5)},
  cc1:
  {gap:16, marginTop: hp(6)},
  header:{

    fontFamily:'Agrandir-TextBold',
    fontSize:30,
    fontWeight:'700',
    lineHeight:40,
    textAlign:'left',
    color:COLOR.Dark

  },
  subheader:{
    fontFamily:'Agrandir-Regular',
    fontSize:16,
    fontWeight:'400',
    lineHeight:22,
    textAlign:'left',
    color:COLOR.Dark

  },
  forgot:{
    fontFamily:'Agrandir-Regular',
    fontSize:12,
    fontWeight:'400',
    lineHeight:15.6,
    textAlign:'right',
    color:COLOR.Dark

  },
  account:{
    ontFamily:'Agrandir-Regular',
    fontSize:14,
    fontWeight:'400',
    lineHeight:20,
    textAlign:'center',
    color:COLOR.Dark

  },
  signup:{
    ntFamily:'Agrandir-TextBold',
    fontSize:14,
    fontWeight:'700',
    lineHeight:20,
    textAlign:'left',
    color:COLOR.PrimaryColor

  },

  iconstyle:{position:'absolute', right:wp(3), top:hp(2)},

  buttonStyle:
  {
     height:hp(6),
     borderRadius:10
  }

})

