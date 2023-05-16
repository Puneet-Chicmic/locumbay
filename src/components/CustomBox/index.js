import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const CustomBox = ({children,containerStyle}) => {
  return (
    <View style={[styles.userInfoCtr,containerStyle]} >
    {children}
    </View>
  )
}

export default CustomBox