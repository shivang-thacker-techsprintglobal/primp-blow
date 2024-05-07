import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLOR } from "../../constants/Colors";

export const styles = StyleSheet.create({

    container:
    {
        flex:1,
        alignItems:'center',
        paddingHorizontal: wp(4),
        paddingVertical:hp(8),
        backgroundColor:COLOR.white
    }
})