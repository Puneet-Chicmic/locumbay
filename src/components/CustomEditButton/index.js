import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { ICONS } from '../../theme/Icon'

const CustomEditButton = ({
    onPress=()=>{}
}) => {
  return (
  <View>
  <TouchableOpacity
  hitSlop={30}
  onPress={onPress}
  >
    {ICONS.EDIT_PROFILE(35,35)}
</TouchableOpacity>
</View>
  )
}

export default CustomEditButton