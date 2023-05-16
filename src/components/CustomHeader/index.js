import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { STRING } from '../../theme/Constants'
import CustomEditButton from '../CustomEditButton'

const CustomHeader = ({
    heading,
    editIcon,
    editPress=()=>{}
}) => {

  return (
    <View style={styles.ctr}>
    <Text style={styles.text} >{heading}</Text>
    {editIcon && <CustomEditButton onPress={editPress}  />}
    </View>
  )
}

export default CustomHeader