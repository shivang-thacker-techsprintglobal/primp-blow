import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Addressbar from '../../common/Addressbar'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { GetNearLocations } from '../../../redux/actions/userActions'



const Nearme = () => {

 

  const {access_token}= useSelector(state=> state.token)
  const { get_near_locations}= useSelector(state=> state.customer)

  const dispatch = useDispatch()

  useEffect(()=>
{
  Alert.alert(`${access_token}`)
  dispatch(GetNearLocations(access_token))
  
},[])

useEffect(()=>
{
  console.log('get near locations', get_near_locations)
},[get_near_locations])
  return (
    <View style={styles.container}>


          <Addressbar item={get_near_locations} show={true}/>
     
      
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