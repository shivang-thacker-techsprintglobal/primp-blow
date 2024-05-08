import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Imagecontainer_round from '../../common/Imagecontainer_round';
import {COLOR} from '../../constants/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Closeicon from '../../assets/svgs/close';
import AddonsCard from '../../common/AddonsCard';

const Addonsmodal = ({onPress}) => {
  return (
    <View style={styles.modalcontainer}>
      <Imagecontainer_round style={styles.iconcontainerstyle} onPress={onPress}>
        <Closeicon />
      </Imagecontainer_round>

      <View style={styles.container}>
        <Text style={styles.titleText}>Add-ons</Text>
        <View style={{flex: 0.8, gap:12}}>
            <AddonsCard/>
            <AddonsCard/>
            <AddonsCard/>
            <AddonsCard/>
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Addonsmodal;

const styles = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },
  iconcontainerstyle: {
    backgroundColor: COLOR.Primaryiconcontainer,
    borderColor: COLOR.PrimaryColor,
    marginBottom: hp(2),
    height: 44,
    width: 44,
    padding: 10,
    gap: 10,
  },
  container: {
    flex: 0.84,
    backgroundColor: COLOR.white,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },
  buttonStyle: {
    backgroundColor: COLOR.PrimaryColor,
    gap: 10,
    height: 50,
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    fontFamily: 'Agrandir-TextBold',
    textAlign: 'center',
    color: COLOR.white,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  titleText:
  {
flex:0.1,
fontSize:18,
lineHeight:28,
fontWeight:'700',
fontFamily:'Agrandir-TextBold',
color:COLOR.Dark
  }
});
