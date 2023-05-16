import { View, Text } from 'react-native'
import React from 'react'
import CustomBox from '../../../components/CustomBox'
import { STRING } from '../../../theme/Constants'
import { styles } from './styles'

const BankDetails = ({data}) => {
    const BANK_DETAILS=[
        {title:STRING.HEADING.BANK_NAME,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.ACC_NO,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.SORT_CODE,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.NAT_INS_NO,value:"N.A.",tickShown:false},
    ]

  return (
    <CustomBox >
        <Text style={styles.mainTitle} >{STRING.BANK_DETAILS}</Text>
         {BANK_DETAILS?.map(item=>{
           return( <View style={styles.ctr} >
            <Text style={styles.title} >{item?.title}</Text>
        <View style={styles.valueCtr} >
            <Text style={styles.value} >{item?.value}</Text>
            {item?.tickShown && ICONS.GREEN_TICK(20,20)}
        </View>
        </View>)
        })
        }
    </CustomBox>
  )
}

export default BankDetails