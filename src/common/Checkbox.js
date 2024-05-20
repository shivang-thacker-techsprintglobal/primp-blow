import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLOR } from '../constants/Colors';
import Checkicon from '../assets/svgs/check';
import { useDispatch, useSelector } from 'react-redux';
import { addSubItemToCart, removeSubItemFromCart } from '../../redux/actions/userActions';

const Checkbox = ({ item }) => {

  const {parent_item_id} = useSelector(state=> state.customer)
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (isChecked) {
     
      dispatch(removeSubItemFromCart(parent_item_id,item.ID));
    } else {
     
      dispatch(addSubItemToCart(parent_item_id,item));
    }
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={isChecked ? styles.checkboxActiveContainer : styles.checkboxContainer}
    >
      {isChecked ? <Checkicon /> : null}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.CheckboxColor,
  },
  checkboxActiveContainer: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: COLOR.PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
