import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import MatercardIcon from '../assets/svgs/MasterCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLOR } from '../constants/Colors';


const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState('first');

  return (
    <View>
      <RadioButton.Group onValueChange={newValue => setSelectedValue(newValue)} value={selectedValue}>
        <View>
           
            <View style={styles.cardContainer}>
            <MatercardIcon/>
                <View style={styles.details}>
                    <Text numberOfLines={1} style={styles.cardName}>Ravi Talajiya</Text>
                    <Text style={styles.cardNumber}>**** **** **** 3214</Text>
                </View>
          <RadioButton.Item uncheckedColor={COLOR.fontFamily} color={COLOR.PrimaryColor} value="first" />
          </View>
         
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({

    cardContainer:
    {
       flexDirection:'row', alignItems:'center',width:wp(88),height:hp(10.5),
        borderRadius:10,borderWidth:1,padding:10,gap:12, borderColor:COLOR.Grey,
    },
    details:
    {
        width:214,
        height:43,
        gap:4,
        
    },
    cardName:
    {
        fontFamily:'Agrandir-TextBold',
        fontWeight:'700',
        fontSize:13,
        lineHeight:16.9,
        color:COLOR.fontGrey

    },
    cardNumber:
    {
        fontFamily:'Agrandir-Regular',
        fontWeight:'400',
        fontSize:16,
        lineHeight:22,
        color:COLOR.Dark
    }
})
