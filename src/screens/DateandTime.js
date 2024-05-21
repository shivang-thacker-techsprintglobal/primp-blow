import { StyleSheet, Text, View, Platform } from 'react-native'
import React,{useState} from 'react'
import Header from '../common/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLOR } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import TimeTab from '../components/DateandTime/TimeTab'
import { Button } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CalenderComponent from '../components/DateandTime/CalendarComponent'


const DateandTime = () => {
    
    const navigation = useNavigation()
    const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();
  const [selected, setSelected] = useState('');
  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
      <Header title={'Pick a Date & Time'} navigation={navigation}/>
      <View style={styles.c1}>
     <CalenderComponent/>
     
      {/* <Calendar
      style={{height:330}}
      current={'2024-05-24'}
      
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true}
      }}

     headerStyle={{borderBottomWidth:1,borderBottomColor:COLOR.Grey,backgroundColor:COLOR.white}}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      
      initialDate={'2024-05-24'}
      disabledDaysIndexes={4}
      disableAllTouchEventsForDisabledDays={true}
      
      

      theme={{
        arrowColor:COLOR.Dark,
        dayTextColor:COLOR.Dark,
        textDisabledColor:COLOR.Grey,
        todayTextColor:COLOR.Dark,
        todayButtonTextColor:COLOR.Grey,
        selectedDayTextColor: COLOR.white,
        selectedDayBackgroundColor:COLOR.PrimaryColor,
        selectedDotColor:COLOR.PrimaryColor,

        
        backgroundColor:COLOR.white,
        monthTextColor:COLOR.Dark,
        textInactiveColor:'red',
        
      
      }}
      /> */}
      <View style={styles.line}>

      </View>
      <View style={{flex:1}}> 
        <Text style={styles.selecttime}> Select Time</Text>
        <TimeTab/>
      </View>
      
      </View>
      <View style={styles.buttonposition}>
      <Button onPress={()=> navigation.navigate('Cart')} mode="contained"  style={{width:'100%', borderRadius:10, backgroundColor:COLOR.PrimaryColor}}> Continue</Button>
      </View>
    </View>
  )
}

export default DateandTime

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor:COLOR.white,
        padding:16
    },
    c1:
    {
        gap:16,
        marginTop:10,
        flex:1,
    },
    line:
    {   
        borderWidth:1,
        borderColor:COLOR.Grey
    },
    selecttime:
    {
        fontFamily:'Agrandir-TextBold',
        fontWeight:'700',
        fontSize:18,
        lineHeight:28,
        color:COLOR.Dark

    },
    buttonposition:
    {
        position:'absolute', bottom:0,width:'100%', 
        justifyContent:'center',
        alignItems:'center',
        height:hp(10),
        alignSelf:'center',
    },
    selectedDayTextStyle:
    {

        fontFamily:'Agrandir-Regular',
        fontSize:16,
        fontWeight:'400',
        lineHeight:22,
        textAlign:'center'

    },
    textStyle:
    {fontFamily:'Agrandir-Regular',
    fontSize:16,
    fontWeight:'400',
    lineHeight:22,
    textAlign:'center'

    },
    selectedDayStyle:
    {height:32,width:34, borderRadius:10, backgroundColor:COLOR.PrimaryColor, padding:5,gap:10}
})