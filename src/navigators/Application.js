import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef, } from '@react-navigation/native';
import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator'
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
    const { Layout, darkMode, NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;
    const navigationRef = useNavigationContainerRef();
    useFlipper(navigationRef);
    const authToken = useSelector(state => state?.common?.authToken)
    return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer 
      theme={NavigationTheme}
       ref={navigationRef}
       >
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'}/>
        {(authToken) ? <AppNavigator /> : <AuthNavigator/>}
        
      </NavigationContainer>
    </SafeAreaView>
    );
};
export default ApplicationNavigator;
