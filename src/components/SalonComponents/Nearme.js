import { Alert, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Addressbar from '../../common/Addressbar'
import { useDispatch, useSelector } from 'react-redux'
import { GetALlLocations } from '../../../redux/actions/userActions'
import { useNavigation } from '@react-navigation/native'

const Nearme = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const { access_token, get_all_locations } = useSelector(state => state.token)
  console.log(get_all_locations)
  useEffect(() => {
    if (access_token) {
      dispatch(GetALlLocations(access_token, navigation))
    }
  }, [access_token, dispatch, navigation])

  return (
    <View style={styles.container}>
    

        {get_all_locations?.Results?.map((item,index)=>
      {
        return(
          <Addressbar key={get_all_locations} item={item} show={true} />
        )

      })}
        
   
    </View>
  )
}

export default Nearme

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
