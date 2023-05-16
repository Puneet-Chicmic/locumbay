import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

export const styles = StyleSheet.create({
    text:{
        fontSize:RFValue(19),
        color:COLORS.PRIMARY,
        fontFamily:FONT_FAMILY.BOLD,
        marginTop:RFValue(25),
        marginBottom:RFValue(20)
    },
    ctr:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
})