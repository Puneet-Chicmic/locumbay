import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../store/common'

const Example = () => {
  const dispatch=useDispatch()
  return (
    <View style={{backgroundColor:"#ffffff",height:"100%"}} >
      <Text>Example</Text>
      <CustomButton
      buttonLabel={"Logout"}
      onPress={()=>dispatch(removeToken())}
      />
    </View>
  )
}

export default Example