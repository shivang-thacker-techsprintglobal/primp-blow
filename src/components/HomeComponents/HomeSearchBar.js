import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper'
import { COLOR } from '../../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={styles.container}>
      <Searchbar
         placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchbar}
      iconColor={COLOR.LightGrey}
      placeholderTextColor={COLOR.LightGrey}
    />
    </View>
  )
}

export default HomeSearchBar

const styles = StyleSheet.create({
  searchbar:
  { backgroundColor:COLOR.white,
    borderColor:COLOR.greyborderColor,
    borderWidth:wp(0.3),
    borderRadius:10,
    

  },
  container:
  {
    flex:0.1
  }
})