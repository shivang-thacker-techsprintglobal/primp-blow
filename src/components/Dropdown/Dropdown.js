import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from "react-native";
  import React, { useState } from "react";
  
import { COLOR } from "../../constants/Colors";
import Dropdownlogo from '../../assets/svgs/Dropdown'
  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  const DropDown = () => {
    const [isClicked, setIsClicked ] = useState(false);
    const [dropdownvalue, setDropdownvalue]= useState('+91')
    const [data, setData] = useState([
        '+91', '+07', '+31' ,'+91', '+07', '+31' 
         
      ]);
  
    return (
      <>
      <TouchableOpacity
        style={styles.dropdownselector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
       <Text style={styles.text}>{dropdownvalue}</Text>
       <Dropdownlogo/>
       </TouchableOpacity>
       {isClicked ? (
        <View style={styles.listcontainer}>
          {data.map((item, index) => {
            return (
              <Text
                key={index}
                style={styles.itemstyle}
                onPress={() => {
                  setDropdownvalue(item);
                  setIsClicked(!isClicked);
                }}
              >
                {item}
              </Text>
            );
          })}
        </View>
      ) : null}
      

   

      
</>);
  };
  
  export default DropDown;
  
  const styles = StyleSheet.create({
    dropdownselector: {
      height: hp(6),
      width: '17%',
      borderRadius: hp(1),
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: COLOR.white,
      borderWidth:hp(0.1),
      justifyContent:'space-around',
      borderColor:COLOR.LightGrey,
      marginTop:hp(0.9),
      zIndex:1
      
    },
    text: {
      color: COLOR.Dark,
      fontSize: hp(1.7),
      fontWeight: "400",
      textAlign: "center",
    },
    listcontainer:{
      width: '17%',
      borderRadius: hp(1),
      backgroundColor: COLOR.white,
      borderWidth:hp(0.1),
      borderColor:COLOR.LightGrey,
      position:'absolute',
      top:hp(5),
      zIndex:1,
        
    },
    itemstyle:
    {
       color:COLOR.black,
       paddingVertical:hp(0.7)
    }
  });