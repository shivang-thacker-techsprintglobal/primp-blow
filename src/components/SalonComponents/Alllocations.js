import { Alert, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import Addressbar from '../../common/Addressbar'
import { useDispatch } from 'react-redux'
import { GetALlLocations } from '../../../redux/actions/userActions'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'


const Alllocations = () => {

  const navigation = useNavigation()

 

  const {access_token}= useSelector(state=> state.token)
  const { get_all_locations, loading}= useSelector(state=> state.customer)

  const dispatch = useDispatch()

  useEffect(()=>
{
  Alert.alert(`${access_token}`)
  dispatch(GetALlLocations(access_token, navigation))
  
},[])


  return (
    <View style={styles.container}>

{loading? <ActivityIndicator color={COLOR.PrimaryColor} style={{marginTop:hp(2)}}/> :<Addressbar item={get_all_locations?.Results[0]} show={true}/> }
     
      
    </View>
  )
}

export default Alllocations

const styles = StyleSheet.create({
    container:
    {
     padding:10,
    }
})