import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import Checkbox from './Checkbox';

const AddonsCard = ({item}) => {

 
  return (
    <View style={styles.container}>
      <Checkbox item={item} />
      <View style={styles.detailscontainer}>
        <View style={styles.c1}>
          <Text numberOfLines={2} style={styles.textTitle}>+{item?.Name}</Text>
          <Text style={styles.mediumText}>{item?.TotalDuration} Min</Text>
        </View>

        <Text style={styles.textTitle}>${item?.Price?.Amount}</Text>
      </View>
    </View>
  );
};

export default AddonsCard;

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 104,
    borderWidth: 1,
    padding: 16,
    gap: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.Grey,
  },

  detailscontainer: {
    width: 279,
    height: 72,
    gap: 16,
    flexDirection: 'row',
    
  },
  c1: {
    gap: 8,
    width:'78%',
    justifyContent:'space-around'
  },
  textTitle:
    {
      color:COLOR.Dark,
      width:'70%',
      fontWeight:'700',
      fontFamily:'Agrandir-TextBold',
      fontSize:16,
      lineHeight:22
    },

    mediumText:
    {
      color:COLOR.Dark,
        width:'70%',
        fontWeight:'400',
        fontFamily:'Agrandir-Regular',
        fontSize:12,
        lineHeight:20

    }
});
