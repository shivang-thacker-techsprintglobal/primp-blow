import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../constants/Colors';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {gettimeAppointment} from '../../redux/actions/userActions';

const TimeSlotcard = ({item}) => {
  const [selected, setSelected] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const dispatch = useDispatch();
  



  // If formattedTime is null, return null to avoid rendering the component

  return (
    <View style={{width: '33%', alignItems: 'center'}}>
      
        <TouchableOpacity
          style={selected ? styles.activetimecontainer : styles.timecontainer}
          onPress={() => {
            setSelected(!selected);
            // setSelectedTime(formatTime(item?.startDateTime))
            dispatch(gettimeAppointment(item));
          }}>
          <Text
            style={[
              styles.timetext,
              {color: selected ? COLOR.white : COLOR.Dark},
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
   
    </View>
  );
};

export default TimeSlotcard;

const styles = StyleSheet.create({
  timecontainer: {
    width: '90%',
    backgroundColor: COLOR.white,
    height: 36,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR.Grey,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  timetext: {
    color: COLOR.Dark,
    fontFamily: 'Agrandir-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.6,
    textAlign: 'center',
  },
  activetimecontainer: {
    width: '90%',
    backgroundColor: COLOR.PrimaryColor,
    height: 36,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
});
