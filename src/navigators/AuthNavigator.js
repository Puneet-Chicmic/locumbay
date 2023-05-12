
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NAVIGATION } from '../theme/Constants'
import Login from '../screens/Login'
import ForgotPassword from '../screens/ForgotPassword'

const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false,animationEnabled:true,gestureDirection:"horizontal" }}
    >
      <Stack.Screen name={NAVIGATION.LOGIN} component={Login} />
      <Stack.Screen name={NAVIGATION.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
