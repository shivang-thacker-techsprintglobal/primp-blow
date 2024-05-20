import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/userActions';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CartCard from '../common/CartCard';
import TextInputcommon from '../common/TextInputcommon';
import ButtonCommon from '../common/ButtonCommon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Cart = () => {

  const ios = Platform.OS == "ios";
  const { top } = useSafeAreaInsets();

  
  const {items} = useSelector(state => state.cart);
  console.log(items)
  console.log(items[0]?.subItems)
  const dispatch = useDispatch();
  const navigation = useNavigation()

  

  const renderItem = ({ item,index }) => (
   
      <CartCard item={item} index={index}/>
      
 
  );

  const [note,setNote] = useState('')
  const [promoCode,setpromoCode]=useState()

  return (
    <View style={[ styles.container,{paddingTop: ios ? top : top + 10}]}> 
    <View style={styles.c}>
      <Header title={'Cart'} navigation={navigation}/>


      <View style={styles.c1}>
        
        <>
      {items.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
    
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item,index)=> index.toString()}
        />
       
       
      )}
      </>

      <View style={styles.notecontainer}>
        <Text style={styles.note} >Add a Note</Text>
        <TextInputcommon numberOfLines={6} label={'Enter a Note'} style={{height : hp(17),borderRadius:10}} value={note} setValue={setNote} multiline={true}/>
      </View>

      <View style={styles.promocodeContainer}>
      <TextInputcommon numberOfLines={6} label={'Promo Code'} style={{width:'70%'}} value={promoCode} setValue={setpromoCode} />
      <ButtonCommon title={'Apply'} buttonstyle={styles.buttonStyle} textstyle={{color:COLOR.white, fontSize:16}}/>
      </View>
      </View>

      

     
    </View>

<View style={styles.bottombuttoncontainer} >

<ButtonCommon title={'Add Guest'} buttonstyle={{width:'42%', height:50}} textstyle={{fontSize:16, lineHeight:22}}/>
<ButtonCommon onPress={()=>navigation.navigate('DateandTime')} title={'Book a Slot'} buttonstyle={{width:'42%', height:50,backgroundColor:COLOR.PrimaryColor}} textstyle={{color:COLOR.white, fontSize:16,lineHeight:22}}/>

</View>

</View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container:
  {
 flex:1,
 backgroundColor:COLOR.white
  },

  c:
  {  flex:1,
    backgroundColor:COLOR.white,
    padding:16 },

    c1:
    {
        gap:24,
        marginTop:hp(3),
        width:'100%', 
    },

 

  notecontainer:
  {
      gap:5
  },
  note:
  {
fontFamily:'Agrandir-Regular',
fontSize:12,
fontWeight:'400',
lineHeight:15.6,
textAlign:'left',
color:COLOR.DarkGrey



  },
  promocodeContainer:
  {
      
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      gap:2
  },

  bottombuttoncontainer:
  {
    position:'absolute',
    width:'100%',
    alignSelf:'center',
    bottom:0,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:hp(10),
  },

  buttonStyle:
  {backgroundColor:COLOR.PrimaryColor, height:hp(6.3), width:'25%'}

})
