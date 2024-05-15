import { StyleSheet, Text, View , Platform} from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../../common/Header'
const ChangePassword = () => {
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
     <Header navigation={navigation} title={'Change Password'}/>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    container:
  {
 flex:1,
 backgroundColor:COLOR.white,
 padding:16
  },
})