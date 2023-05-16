import { View, Text } from 'react-native'
import React from 'react'
import CustomBox from '../CustomBox'
import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { STRING } from '../../theme/Constants'

const CustomTableContainer = ({
  title,

}) => {
  return (
    <CustomBox containerStyle={styles.containerStyle} >
      <View style={
        [styles.titleCtr,
        title===STRING.HEADING.UPLOADED_DOCUMENTS && styles.documentTitleCtr
      ]
      }
         >
      <Text style={[
        styles.title,
        title===STRING.HEADING.UPLOADED_DOCUMENTS && styles.documentTitle
        ]} >{title}</Text>
      </View>

    <Text style={styles.comingText} > Coming soon...</Text>

    </CustomBox>
  )
}

export default CustomTableContainer