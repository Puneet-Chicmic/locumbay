import { View, Text } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'
import CustomHeader from '../../components/CustomHeader'
import { STRING } from '../../theme/Constants'
import EditProfileTopBarNavigator from '../../navigators/EditProfileTopBarNavigator'




const EditProfile = () => {
  return (
    <KeyboardAwareScrollView style={styles.mainCtr} >
      <View style={styles.subCtr} >
      <CustomHeader heading={STRING.MANAGE_PROFILE} />
    {/* =================================== Top Bar Navigation ============================================ */}
    <EditProfileTopBarNavigator/>

      </View>

  </KeyboardAwareScrollView>
  )
}

export default EditProfile