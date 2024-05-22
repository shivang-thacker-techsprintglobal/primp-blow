import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../constants/Colors';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import {useSelector, useDispatch} from 'react-redux';
import { fetchaccessToken, Finditinerary1day, getdateAppoinment } from '../../../redux/actions/userActions';

const CalenderComponent = () => {
  const {items} = useSelector(state => state.cart);
const dispatch = useDispatch()
const {token_fetch}=useSelector(state => state.token)
  const disabledDatesArray = [
    '2024-05-10', // Example disabled date in format 'YYYY-MM-DD'
    '2024-05-15',
    '2024-05-13'
    // Add more disabled dates as needed
  ];

 

  return (
    <View style={styles.container}>
      <CalendarPicker
        textStyle={styles.textStyle}
        height={400}
        selectedDayColor={COLOR.PrimaryColor}
        selectedDayTextColor={COLOR.white}
        selectedDayStyle={styles.selectedDayStyle}
        todayBackgroundColor={COLOR.black}
        minDate={moment().format('YYYY-MM-DD')}
       
        
        onDateChange={async(date) => {
          try{
            console.log('in try')
            const momentDate =  moment(date);

          const formattedDate =  momentDate.format('YYYY-MM-DD');
          dispatch(getdateAppoinment(formattedDate))
          const formattedItineraries = await items.map(item => ({
            serviceId: item.ID,
            employeeId: null,
            employeeGenderId: null,
          }));

            dispatch(fetchaccessToken)
    
          dispatch(Finditinerary1day(token_fetch,formattedDate,formattedItineraries))

          }
          catch(error){
                 console.log(error)
          }

          
        }}
        Create a moment object from the date parameter
        disabledDates={(date) => {
            // Create a moment object from the date parameter
            const momentDate = moment(date);
            // Format the moment object to match the format of disabled dates
            const formattedDate = momentDate.format('YYYY-MM-DD');
            // Check if the formatted date is in the disabledDatesArray
            return disabledDatesArray.includes(formattedDate);
          }}
        selectedDayTextStyle={styles.selectedDayTextStyle}
      />
    </View>
  );
};

export default CalenderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedDayTextStyle: {
    fontFamily: 'Agrandir-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: 'Agrandir-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
  selectedDayStyle: {
    height: 32,
    width: 34,
    borderRadius: 10,
    backgroundColor: COLOR.PrimaryColor,
    padding: 5,
    gap: 10,
  },
});
