import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RegistrationDetails from '../screens/EditProfile/RegistrationDetails';
import Invoice from '../screens/EditProfile/Invoice';
import ProfileVerification from '../screens/EditProfile/ProfileVerification';
import CV from '../screens/EditProfile/CV';
import { NAVIGATION, STRING } from '../theme/Constants';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS, FONT_FAMILY } from '../theme/Variables';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialTopTabNavigator();

const EditProfileTopBarNavigator = () => {
  return (
      <View style={{flex:1,backgroundColor:COLORS.WHITE}} >
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor:COLORS.PRIMARY_FADED,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          width:widthPercentageToDP(100)
        },    
        tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: RFValue(9),
            fontFamily:FONT_FAMILY.SEMIBOLD,
            textTransform:"none"
        },
        tabBarIndicatorStyle: {
            borderBottomColor: COLORS.PRIMARY,
            borderBottomWidth: 4,
            borderRadius:RFValue(8),
          },
    }}

      style={{
        flex:1,
        minHeight:heightPercentageToDP(85),
        backgroundColor:COLORS.WHITE
      }}
      sceneContainerStyle={{backgroundColor:COLORS.WHITE}}
    >
      <Tab.Screen name={NAVIGATION.EDIT_TOP_TABS.REGISTRATION_DETAILS} component={RegistrationDetails} options={{tabBarLabel:STRING.HEADING.REGISTRATION_DETAILS}} />
      <Tab.Screen name={NAVIGATION.EDIT_TOP_TABS.INVOICE} component={Invoice} options={{tabBarLabel:STRING.HEADING.INVOICE}} />
      <Tab.Screen name={NAVIGATION.EDIT_TOP_TABS.PROFILE_VERIFICATION} component={ProfileVerification}  options={{tabBarLabel:STRING.HEADING.PROFILE_VERIFICATION}} />
      <Tab.Screen name={NAVIGATION.EDIT_TOP_TABS.CV} component={CV} options={{tabBarLabel:STRING.HEADING.CV}} />

    </Tab.Navigator>
</View>
  )
}

export default EditProfileTopBarNavigator