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

 

  const {access_token,get_all_locations}= useSelector(state=> state.token)
  

  const dispatch = useDispatch()

  useEffect(()=>
{
  
  dispatch(GetALlLocations(access_token, navigation))
  
},[])


  return (
    <View style={styles.container}>

{get_all_locations?.Results?.map((item,index)=>
      {
        return(
          <Addressbar key={get_all_locations} item={item} show={false} />
        )

      })}
     
      
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