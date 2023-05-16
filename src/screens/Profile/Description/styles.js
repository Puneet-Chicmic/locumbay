import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../../theme/Variables'

export const styles = StyleSheet.create({
    heading:{
        fontSize:RFValue(17),
        fontFamily:FONT_FAMILY.BOLD,
        color:COLORS.PRIMARY,
        marginLeft:RFValue(5)
    },

    noDataCtr:{
        width:wp(88),alignItems:"center"
    },
    noDataText:{
        fontSize:RFValue(16),
        fontFamily:FONT_FAMILY.MEDIUM,
        padding:RFValue(20),
        color:COLORS.PRIMARY
    }
})