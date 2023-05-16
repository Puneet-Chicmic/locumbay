import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS } from '../../theme/Variables'

const W = Dimensions.get('window').width
const H = Dimensions.get('window').height

export const styles = StyleSheet.create({
    userInfoCtr:{
        borderWidth:1,
        borderColor:COLORS.BORDER_COLOR,
        borderRadius:RFValue(8),
        padding:RFValue(10),
        marginTop:RFValue(20),
        backgroundColor:COLORS.SECONDARY
    },
})