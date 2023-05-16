import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ICONS } from '../../theme/Icon'
import { NAVIGATION, REGEX, STRING } from '../../theme/Constants'
import { IMAGES } from '../../theme/Images'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import { useLoginMutation } from '../../services/modules/login'
import { showMessage, hideMessage } from "react-native-flash-message";
import CustomLoader from '../../components/CustomLoader'
import { useDispatch, useSelector } from 'react-redux'
import { updateToken, updateUserData } from '../../store/common'
import { useNavigation } from '@react-navigation/native'
import CustomImage from '../../components/CustomImage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BasicUserData from './BasicUserData'
import ComputerSystemFamiliar from './ComputerSytemFamiliar'
import BankDetails from './BankDetails'
import Description from './Description'
import CustomTableContainer from '../../components/CustomTableContainer'
import CustomEditButton from '../../components/CustomEditButton'
import CustomHeader from '../../components/CustomHeader'

const Profile = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const userData=useSelector(state=>state?.common?.userData )
  console.log(userData,"USER DATA");

  const onEditPress=()=>{
    navigation.navigate(NAVIGATION.EDIT_PROFILE)
  }

  return (
    <KeyboardAwareScrollView style={styles.mainCtr} >
      <CustomLoader visible={false} />
      <View style={styles.subCtr}>

      <CustomHeader heading={STRING.VIEW_PROFILE} editIcon editPress={onEditPress} />

    <CustomImage
    url={userData?.photo}
    imageStyle={styles.imageStyle}
    />

    {/* ============================ Basic User Information ====================================== */}
    <BasicUserData data={userData} />

    {/* ============================= Computer System Data ======================================== */}
    <ComputerSystemFamiliar data={[]} />

    {/* ================================= Bank Details ============================================= */}
    <BankDetails />

    {/* ================================ Description ================================================ */}
    <Description/>

    {/* =================================== Education =============================================== */}
    <CustomTableContainer title={STRING.HEADING.EDUCATION} />

     {/* =================================== Experience =============================================== */}
     <CustomTableContainer title={STRING.HEADING.EXPERIENCE} />

      {/* =================================== Uploaded Documents =============================================== */}
    <CustomTableContainer title={STRING.HEADING.UPLOADED_DOCUMENTS} />

      </View>
    </KeyboardAwareScrollView>
  )
}

export default Profile