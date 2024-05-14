import { StyleSheet, Text, View , Platform,ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../../common/Header'
import Imagecontainer_round from '../../common/Imagecontainer_round'
import CameraIcon from '../../assets/svgs/Camera'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TextInputcommon from '../../common/TextInputcommon'

const Personalinformation = () => {
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()

  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [phoneNumber,setPhoneNumber] = useState()
  const [email,setEmail] = useState()

  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
     <Header navigation={navigation} title={'Personal Information'}/>
     <View style={styles.c1}>
            <ImageBackground source={require('../../assets/pngs/Profile_image.png')} style={styles.imageBackground}>
              <Imagecontainer_round style={styles.iconContainer}>
                <CameraIcon/>
              </Imagecontainer_round>
            </ImageBackground>
         <Text style={styles.profileName}>Ravi Talajiya</Text>   
      </View>
      <View style={styles.c2}>

        <TextInputcommon label={'First Name'}/>
        <TextInputcommon label={'Last Name'}/>
        <TextInputcommon label={'Phone Number'}/>
        <TextInputcommon label={'Email'}/>

      </View>
    </View>
  )
}

export default Personalinformation

const styles = StyleSheet.create({
    container:
  {
 flex:1,
 backgroundColor:COLOR.white,
 padding:16
  },
  c1:
  {width: wp(32.99), height:hp(15.5),  alignSelf:'center',justifyContent:'center',alignItems:'center', marginTop:hp(4), gap:12},
  profileName:
  {
    fontFamily:'Agrandir-Regular',
    fontWeight:'400',
    fontSize:24,
    lineHeight:32,
    color:COLOR.black
  },
  imageBackground:
  {height:80,width:80, justifyContent:'flex-end', alignItems:'flex-end'},
  iconContainer:
  {height:30, width:30, backgroundColor:COLOR.PrimaryColor},
  c2:
  {
    alignSelf:'center',
    width:wp(87.3),
    gap:16,
    marginTop:hp(5)


//     width: Fixed (344px)px;
// height: Hug (320px)px;
// top: 248px;
// left: 16px;
// gap: 16px;
// opacity: 0px;


  }
})