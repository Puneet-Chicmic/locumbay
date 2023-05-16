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
    loginText:{
        fontSize:RFValue(21),
        color:COLORS.PRIMARY,
        fontFamily:FONT_FAMILY.BOLD,
        marginTop:RFValue(25),
        marginBottom:RFValue(20)
    },
    editCtr:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    imageStyle:{
        width:"100%",
        height:RFValue(250),
        borderRadius:RFValue(10)
    },
    userInfoCtr:{
        borderWidth:1,
        borderColor:COLORS.BORDER_COLOR,
        borderRadius:RFValue(8),
        padding:RFValue(10),
        marginTop:RFValue(20),
        backgroundColor:COLORS.SECONDARY
    }
})