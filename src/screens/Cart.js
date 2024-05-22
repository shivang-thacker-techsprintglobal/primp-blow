import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {gettimeAppointment, removeFromCart} from '../../redux/actions/userActions';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CartCard from '../common/CartCard';
import TextInputcommon from '../common/TextInputcommon';
import ButtonCommon from '../common/ButtonCommon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Cart = () => {

  


  const ios = Platform.OS == 'ios';
  const {top} = useSafeAreaInsets();

  const {items} = useSelector(state => state.cart);
  const {get_date_appointment,get_time_appointment } = useSelector(state=>state.customer)
  console.log(items);
  console.log(items[0]?.subItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [note, setNote] = useState('');
  const [promoCode, setpromoCode] = useState();

  console.log(get_date_appointment)

  return (
    <View style={[styles.container, {paddingTop: ios ? top : top + 10}]}>
      <ScrollView style={styles.c} contentContainerStyle={{justifyContent:'space-between'}}>
        <Header title={'Cart'} navigation={navigation} />

        <View style={styles.c1}>
          <>
            {items.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              <>
            
                {items?.map((item, index) => {
                  return <CartCard item={item} index={index} key={index} />;
                })}
              </>
            )}
          </>

          <View style={styles.notecontainer}>
            <Text style={styles.note}>Add a Note</Text>
            <TextInputcommon
              numberOfLines={6}
              label={'Enter a Note'}
              style={{height: hp(17), borderRadius: 10}}
              value={note}
              setValue={setNote}
              multiline={true}
            />
          </View>

          <View style={styles.promocodeContainer}>
            <TextInputcommon
              numberOfLines={6}
              label={'Promo Code'}
              style={{width: '70%'}}
              value={promoCode}
              setValue={setpromoCode}
            />
            <ButtonCommon
              title={'Apply'}
              buttonstyle={styles.buttonStyle}
              textstyle={{color: COLOR.white, fontSize: 16}}
            />
          </View>
        </View>
        {get_date_appointment == '' || get_time_appointment == '' ?
<View style={styles.bottombuttoncontainer}>
        <ButtonCommon
          title={'Add Guest'}
          buttonstyle={{width: '42%', height: 50}}
          textstyle={{fontSize: 16, lineHeight: 22}}
          disable={items.length === 0? true : false}
          onPress={()=>{

            if(items?.length >1 || items?.subItems && items?.subItems.length>0)
            {
                Alert.alert('Add Guest','To add guests, it is necessary to remove the add-on service from your cart!')
            }
            else
            {
Alert.alert('no warnings')
            }
          }}
        />
        <ButtonCommon
          onPress={() => navigation.navigate('DateandTime')}
          title={ 'Book a Slot' }
          buttonstyle={{
            width: '42%',
            height: 50,
            backgroundColor: items.length === 0? COLOR.Grey: COLOR.PrimaryColor,
          }}
          disable={items.length === 0? true : false}
          textstyle={{color:items.length === 0? COLOR.fontGrey: COLOR.white, fontSize: 16, lineHeight: 22}}
        />
      </View> :
      
      <View style={styles.bottombuttoncontainer}>

<ButtonCommon
          onPress={() => navigation.navigate('Pay')}
          title={ 'Proceed to Pay' }
          buttonstyle={{
            width: 343,
            height: 50,
            backgroundColor: COLOR.PrimaryColor,
          }}
          textstyle={{color: COLOR.white, fontSize: 16, lineHeight: 22}}
        />
      </View>
      
      }
      </ScrollView>


      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding:16
  },

  c: {flex: 1, backgroundColor: COLOR.white},

  c1: {
    gap: 24,
    marginTop: hp(3),
    width: '100%',
  },

  notecontainer: {
    gap: 5,
  },
  note: {
    fontFamily: 'Agrandir-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15.6,
    textAlign: 'left',
    color: COLOR.DarkGrey,
  },
  promocodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    marginBottom:hp(14)
  },

  bottombuttoncontainer: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp(10),
    backgroundColor:COLOR.white
  },

  buttonStyle: {
    backgroundColor: COLOR.PrimaryColor,
    height: hp(6.3),
    width: '25%',
  },
});
