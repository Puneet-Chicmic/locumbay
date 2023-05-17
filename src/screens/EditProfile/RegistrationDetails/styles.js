import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../../theme/Variables'

export const styles = StyleSheet.create({
    mainCtr:{
        backgroundColor:COLORS.WHITE,
        width:wp(92),
        alignSelf:"center"
    },
    profileImageStyles:{
        width:wp(50),
        height:wp(50),
        borderRadius:wp(50),
        alignSelf:"center",
        marginTop:RFValue(20),
        borderWidth:1
    },
    imageCtr:{
        width:wp(50),
        alignSelf:"center",
        marginBottom:RFValue(25)
    },
    imgUploadCtr:{
        width:RFValue(30),
        height:RFValue(30),
        borderRadius:RFValue(30),
        backgroundColor:COLORS.PRIMARY_DARK,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:5,
        right:7
    },
    saveButton:{
        width:wp(50),
        alignSelf:"center",
        marginBottom:RFValue(30)
    }

})