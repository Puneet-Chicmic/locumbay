import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ICONS } from '../../../theme/Icon'
import { STRING } from '../../../theme/Constants'
import { useRoute } from '@react-navigation/native'
import CustomBox from '../../../components/CustomBox'

const BasicUserData = ({data}) => {
    console.log(data,'route data');

    const USER_DATA=[
        {title:STRING.HEADING.NAME, value:data?.first_name+" "+ data?.last_name ,tickShown: data?.first_name && data?.last_name},
        {title:STRING.HEADING.PHONE,value:!!data?.number ? data?.number : "N.A.",tickShown:!!data?.number},
        {title:STRING.HEADING.DOB,value:!!data?.dob ? data?.dob : "N.A." ,tickShown:!!data?.dob},
        {title:STRING.HEADING.EMAIL, value:!!data?.email ? data?.email : "N.A." ,tickShown:!!data?.email},
        {title:STRING.HEADING.ADDRESS,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.REG_NUM,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.INSURANCE,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.RATING,value:"N.A.",tickShown:false},
        {title:STRING.HEADING.TOTAL_EXP,value:"0 years",tickShown:false},
    ]
  return (
    <CustomBox>
        {USER_DATA?.map(item=>{
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

export default BasicUserData