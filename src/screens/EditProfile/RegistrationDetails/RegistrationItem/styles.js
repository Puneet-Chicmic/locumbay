import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../../../theme/Variables'

export const styles = StyleSheet.create({
    phoneCtr:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECF5F6',
        borderRadius: RFValue(8),
        justifyContent: 'flex-start',
        borderWidth:RFValue(1),
        borderColor:"#E8E8E8",
        height:RFValue(45),
        width:"100%",
        fontSize:RFValue(20),
        color:"#000000"

    },
    phoneTextCtr:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECF5F6',
        borderRadius: RFValue(8),
        justifyContent: 'flex-start',
        height:RFValue(42),
        width:"100%",
        fontSize:RFValue(20),
        color:COLORS.PRIMARY,
        paddingVertical:0

    },
    phoneTextStyle:{
        fontSize:RFValue(13),
        color:COLORS.PRIMARY
    },
    mainPhoneCtr:{marginVertical:RFValue(4)},
    phoneTitle:{
        fontSize:RFValue(15),
        fontFamily:FONT_FAMILY.MEDIUM,
        marginBottom:RFValue(10),
        color:COLORS.PRIMARY
    },
    countryCtr:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECF5F6',
        borderRadius: RFValue(8),
        justifyContent: 'flex-start',
        borderWidth:RFValue(1),
        borderColor:"#E8E8E8",
        height:RFValue(45),
        width:"100%",
        fontSize:RFValue(20),

    },
    warningText:{
        fontSize:RFValue(11),
        fontFamily:FONT_FAMILY.REGULAR,
        color:COLORS.WARNING,
        padding:RFValue(2)
      },
})