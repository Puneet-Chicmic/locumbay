import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

const W = Dimensions.get('window').width
const H = Dimensions.get('window').height

export const styles = StyleSheet.create({
    containerStyle:{
        padding:0,
        paddingBottom:RFValue(20)
    },
    titleCtr:{
        backgroundColor:COLORS.PRIMARY,
        padding:RFValue(16),
        borderTopLeftRadius:RFValue(8),
        borderTopRightRadius:RFValue(8)

    },
    title:{
        fontSize:RFValue(17),
        fontFamily:FONT_FAMILY.BOLD,
        color:COLORS.WHITE,
        marginLeft:RFValue(5)
    },
    comingText:{
        fontSize:RFValue(18),
        alignSelf:"center",
        fontFamily:FONT_FAMILY.MEDIUM,
        margin:10,marginBottom:0,color:COLORS.PRIMARY
    },
    documentTitleCtr:{
        backgroundColor:COLORS.TRANSPARENT
    },
    documentTitle:{
        color:COLORS.PRIMARY
    }
})
