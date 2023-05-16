import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

export const styles = StyleSheet.create({
    mainCtr:{
        flex:1,
        backgroundColor:COLORS.WHITE
    },
    subCtr:{
        // borderWidth:3,
        flex:1,
        width:wp(92),
        alignSelf:"center",paddingVertical:RFValue(10),
    },
})