import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

const W = Dimensions.get('window').width
const H = Dimensions.get('window').height

export const styles = StyleSheet.create({

    buttonContainer: {
        width: W * 0.85,
        height: W * 0.14,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      textStyle: {
        fontFamily: FONT_FAMILY.SEMIBOLD,
        fontSize: RFValue(18),
        color:COLORS.WHITE
      },
})