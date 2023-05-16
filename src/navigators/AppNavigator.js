import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NAVIGATION } from '../theme/Constants'
import { Example } from '../screens'
import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile'

const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={NAVIGATION.EXAMPLE} component={Example} />
      <Stack.Screen name={NAVIGATION.PROFILE} component={Profile} />
      <Stack.Screen name={NAVIGATION.EDIT_PROFILE} component={EditProfile} />

    </Stack.Navigator>
  )
}

export default AuthNavigator
