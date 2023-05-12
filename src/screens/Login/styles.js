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
        width:wp(90),
        alignSelf:"center",paddingVertical:RFValue(25),
    },
    image:{
        width:wp(65),
        height:hp(8),
        alignSelf:"center",
        marginTop:RFValue(15)
    },
    loginText:{
        alignSelf:"center",
        fontSize:RFValue(21),
        color:COLORS.PRIMARY,
        fontFamily:FONT_FAMILY.BOLD,
        marginTop:RFValue(25),
        marginBottom:RFValue(20)
    },
    loginBtn:{
        width:wp(45),
        alignSelf:"center",
        marginTop:RFValue(20)
    },
    forgotPasswordText:{
        color:COLORS.PRIMARY,
        fontFamily:FONT_FAMILY.SEMIBOLD,
        fontSize:RFValue(16),
        alignSelf:"center",
        textDecorationLine:'underline',
        marginTop:RFValue(15)  
    }
})