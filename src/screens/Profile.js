import { StyleSheet, Text, View,Platform,Image, ImageBackground } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../constants/Colors';
import Header from '../common/Header';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Imagecontainer_round from '../common/Imagecontainer_round';
import CameraIcon from '../assets/svgs/Camera'
import ProfileCard from '../common/ProfileCard';

const Profile = () => {
  const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
      <Header navigation={navigation} title={'Profile'}/>
      <View style={styles.c1}>
            <ImageBackground source={require('../assets/pngs/Profile_image.png')} style={styles.imageBackground}>
              <Imagecontainer_round style={styles.iconContainer}>
                <CameraIcon/>
              </Imagecontainer_round>
            </ImageBackground>
         <Text style={styles.profileName}>Ravi Talajiya</Text>   
      </View>
      <View style={styles.c2}
      >
<ProfileCard navigation={navigation}/>

      </View>
      
    </View>
  )
}

export default Profile

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
  c2:
  {width:wp(87), height:hp(18.25), gap:12, alignSelf:'center', marginTop:hp(4)},
  imageBackground:
  {height:80,width:80, justifyContent:'flex-end', alignItems:'flex-end'},
  iconContainer:
  {height:30, width:30, backgroundColor:COLOR.PrimaryColor,}


})