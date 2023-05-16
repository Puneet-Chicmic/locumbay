import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../../theme/Variables'

export const styles = StyleSheet.create({
    title:{
        fontSize:RFValue(15),
        fontFamily:FONT_FAMILY.REGULAR,
        color:COLORS.PRIMARY,
        opacity:0.5
    },
    valueCtr:{
        flexDirection:"row",
        maxWidth:wp(60),
        alignItems:"center",
        marginTop:RFValue(5)
    },
    value:{
        fontFamily:FONT_FAMILY.BOLD,
        fontSize:RFValue(17),
        marginRight:RFValue(3),
        color:COLORS.PRIMARY
    },
    ctr:{
        marginTop:RFValue(15)
    }
})