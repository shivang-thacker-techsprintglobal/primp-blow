import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/userActions';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CartCard from '../common/CartCard';

const Cart = () => {

  
  const {items} = useSelector(state => state.cart);
  console.log(items)
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const renderItem = ({ item,index }) => (
   
      <CartCard item={item} index={index}/>
      
 
  );

  return (
    <View style={styles.container}>
      <Header title={'Cart'} navigation={navigation}/>


      <View style={styles.c1}>
        
        <>
      {items.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <View style={styles.itemsContainer}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item,index)=> index.toString()}
        />
        </View>
       
      )}
      </>

      <View style={styles.note}>
        <Text >Add a Note</Text>
      </View>
      </View>

     
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({

  container:
  {  flex:1,
    backgroundColor:COLOR.white,
    padding:16 },

    c1:
    {
        gap:24,
        marginTop:hp(3),
        width:'100%', 
    },

  itemsContainer:
  {
     borderRadius:10,
     borderWidth:1,
     padding:16,
     gap:12,
     borderColor:COLOR.Grey
  },
  note:
  {
fontFamily:''

//     font-family: Agrandir;
// font-size: 12px;
// font-weight: 400;
// line-height: 15.6px;
// text-align: left;

  }
})
