import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NAVIGATION } from '../theme/Constants'
import { Example } from '../screens'

const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={NAVIGATION.EXAMPLE} component={Example} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
