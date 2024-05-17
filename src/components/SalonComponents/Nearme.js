import { Alert, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import Addressbar from '../../common/Addressbar'
import { useDispatch } from 'react-redux'
import { GetALlLocations } from '../../../redux/actions/userActions'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLOR } from '../../constants/Colors'


const Nearme = () => {

  const navigation = useNavigation()

 

  const {access_token, get_all_locations}= useSelector(state=> state.token)


  const dispatch = useDispatch()

  useEffect(()=>
{
  
  dispatch(GetALlLocations(access_token, navigation))
  
},[])


  return (
    <View style={styles.container}>

<Addressbar item={get_all_locations?.Results[0]} show={true}/> 
     
      
    </View>
  )
}

export default Nearme

const styles = StyleSheet.create({
    container:
    {
     padding:10,
    }
})