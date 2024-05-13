import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Addressbar from '../../common/Addressbar'
import { useDispatch } from 'react-redux'
import { GetALlLocations } from '../../../redux/actions/userActions'
import { useSelector } from 'react-redux'
import { COLOR } from '../../constants/Colors'

const Alllocations = () => {

 

  const {access_token}= useSelector(state=> state.token)
  const { get_all_locations, get_near_locations}= useSelector(state=> state.customer)

  const dispatch = useDispatch()

  useEffect(()=>
{
  Alert.alert(`${access_token}`)
  dispatch(GetALlLocations(access_token))
  
},[])

useEffect(()=>
{
  console.log('get all locations', get_all_locations)
},[get_all_locations])
  return (
    <View style={styles.container}>

          <Addressbar item={get_all_locations.Results[0]} show={false}/>
     
      
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