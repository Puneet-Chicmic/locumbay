import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

export const styles = StyleSheet.create({
    mainCtr:{
        alignItems:"center",
        justifyContent:"center",
        width:wp(100),
        height:hp(100),
        opacity:1,
        backgroundColor:"#00000040"
    },
    image:{
        width:RFValue(200),
        height:RFValue(200)
    }
})