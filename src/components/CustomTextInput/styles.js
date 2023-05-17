import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'

export const styles = StyleSheet.create({
    text:{
        fontSize:RFValue(15),
        fontFamily:FONT_FAMILY.MEDIUM,
        marginBottom:RFValue(10),
        color:COLORS.PRIMARY
    },
    mainCtr:{marginVertical:RFValue(4)},
    subCtr:          {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.SECONDARY,
        borderRadius: RFValue(8),
        justifyContent: 'flex-start',
        borderWidth:RFValue(1),
        borderColor:COLORS.BORDER_COLOR,
        height:RFValue(45)
      },
      disabledCtr:{
        backgroundColor:COLORS.BORDER_COLOR
      },
      textinputCtr:{
        width: '88%',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'center',
      },
      textinput: {
        width:'100%',
        padding: 0,
        paddingTop: RFValue(10),
        paddingBottom: RFValue(10),
        paddingLeft:RFValue(5),
        paddingRight: RFValue(18),
        textAlignVertical: 'top',
        height: '100%',
        color: 'black',
        fontSize: RFValue(14),
        fontFamily: FONT_FAMILY.MEDIUM,
        textAlign: 'left',
        marginLeft: 5,
        alignSelf: 'center',
      },
      warningText:{
        fontSize:RFValue(11),
        fontFamily:FONT_FAMILY.REGULAR,
        color:COLORS.WARNING,
        padding:RFValue(2)
      },

      dobBtn:{
        width:"92%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        alignSelf:"center",
        marginLeft:RFValue(10)
      },
      dobText:{
        color:COLORS.PRIMARY,
        fontFamily:FONT_FAMILY.REGULAR,
        fontSize:RFValue(12)
      }


})