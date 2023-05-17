import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../theme/Variables'
import CustomImage from '../../../components/CustomImage'
import { useSelector } from 'react-redux'
import {styles} from './styles'
import CustomTextInput from '../../../components/CustomTextInput'
import { ICONS } from '../../../theme/Icon'
import { REGEX, REGISTRATION_FIELD_NUMBER, STRING } from '../../../theme/Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../../components/CustomButton'
import RegistrationItem from  './RegistrationItem'
import { useUpdateProfileMutation } from '../../../services/modules/profile'
import CustomImageUpload from '../../../components/CustomImageUpload'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RegistrationDetails = () => {
    const userData=useSelector(state=>state.common.userData)
    const [updateProfile, { data, isLoading, isError, isSuccess, error }] = useUpdateProfileMutation()

    const [imageUploadVisible,setImageUploadVisible]=useState(false)
    const [imageData,setImageData]=useState("")
    const [registrationData,setRegistrationData]=useState({
      firstName:"",
      lastName:"",
      phoneNumber:"",
      dob:"",
      emailAddress:"",
      country:"",
      state:"",
      city:"",
      address:"",
      postCode:""
    })

    const [validationErros,setValidationErrors]=useState({
      firstName:"",
      lastName:"",
      phoneNumber:"",
      dob:"",
      emailAddress:"",
      country:"",
      state:"",
      city:"",
      address:"",
      postCode:""
    })
    console.log(registrationData,'registrationData12');


    const REGISTRATION_FIELDS=[
      {heading:STRING.HEADING.FIRST_NAME,placeholder:STRING.PLACEHOLDER.ENTER_HERE,value:registrationData?.firstName,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.FIRST_NAME, setValidationErrors:setValidationErrors, warningText:validationErros?.firstName },
      {heading:STRING.HEADING.LAST_NAME,placeholder:STRING.PLACEHOLDER.ENTER_HERE,value:registrationData?.lastName,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.LAST_NAME, setValidationErrors:setValidationErrors, warningText:validationErros?.lastName },
      {heading:STRING.HEADING.PHONE_NUMBER,placeholder:STRING.PLACEHOLDER.ENTER_HERE,phoneNumber:true,value:registrationData?.phoneNumber,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.PHONE_NUMBER, setValidationErrors:setValidationErrors, warningText:validationErros?.phoneNumber },
      {heading:STRING.HEADING.DOB,placeholder:STRING.PLACEHOLDER.ENTER_HERE,dob:true,value:registrationData?.dob,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.DOB, setValidationErrors:setValidationErrors, warningText:validationErros?.dob },
      {heading:STRING.HEADING.EMAIL_ADDRESS,placeholder:STRING.PLACEHOLDER.ENTER_HERE,disabled:true,value:registrationData?.emailAddress,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.EMAIL_ADDRESS, setValidationErrors:setValidationErrors, warningText:validationErros?.emailAddress },
      {heading:STRING.HEADING.COUNTRY,placeholder:STRING.PLACEHOLDER.ENTER_HERE,region:true,value:registrationData?.country,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.COUNTRY, setValidationErrors:setValidationErrors, warningText:validationErros?.country },
      {heading:STRING.HEADING.STATE,placeholder:STRING.PLACEHOLDER.ENTER_HERE,region:true,value:registrationData?.state,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.STATE, setValidationErrors:setValidationErrors, warningText:validationErros?.state ,registrationData:registrationData},
      {heading:STRING.HEADING.CITY,placeholder:STRING.PLACEHOLDER.ENTER_HERE,value:registrationData?.city,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.CITY, setValidationErrors:setValidationErrors, warningText:validationErros?.city },
      {heading:STRING.HEADING.ADDRESS,placeholder:STRING.PLACEHOLDER.ENTER_HERE,value:registrationData?.address,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.ADDRESS, setValidationErrors:setValidationErrors, warningText:validationErros?.address },
      {heading:STRING.HEADING.POST_CODE,placeholder:STRING.PLACEHOLDER.ENTER_HERE,value:registrationData?.postCode,setRegistrationData:setRegistrationData,number:REGISTRATION_FIELD_NUMBER?.POST_CODE, setValidationErrors:setValidationErrors, warningText:validationErros?.postCode },
    ]

    const validationsCheck=()=>{
      let haveErrors=false
      // ===================================== First Name ======================================================
      const regex=REGEX.FIRST_NAME
      if(!regex.test(registrationData?.firstName)){
        haveErrors=true
        if(!!registrationData?.firstName){
          setValidationErrors(prev=>({...prev,firstName:STRING.WARNING.VALID_NAME}))
        }else{
          setValidationErrors(prev=>({...prev,firstName:STRING.WARNING.FIRST_NAME_EMPTY}))
        }
      }

      // ===================================== Last Name ======================================================
      if(!regex.test(registrationData?.lastName)){
        haveErrors=true
        if(!!registrationData?.lastName){
          setValidationErrors(prev=>({...prev,lastName:STRING.WARNING.VALID_NAME}))
        }else{
          setValidationErrors(prev=>({...prev,lastName:STRING.WARNING.LAST_NAME_EMPTY}))
        }
      }

      // ===================================== Phone Number ======================================================
      if(!!validationErros?.phoneNumber){
        haveErrors=true
      }

      // ===================================== DOB ======================================================
      console.log(!registrationData?.dob?.toString(),'registrationData?.dob?.toString()');
      if(!registrationData?.dob?.toString()){
        haveErrors=true
        setValidationErrors(prev=>({...prev,dob:STRING.WARNING.DOB_REQUIRED}))
      }

      // ===================================== City ======================================================
      if(!registrationData?.city){
        haveErrors=true
        setValidationErrors(prev=>({...prev,city:STRING.WARNING.CITY_REQUIRED}))
      }

      // ===================================== Address ======================================================
      if(!registrationData?.address){
        haveErrors=true
        setValidationErrors(prev=>({...prev,address:STRING.WARNING.ADDRESS_REQUIRED}))
      }

      // ===================================== Post Code ======================================================
      if(!registrationData?.postCode){
        haveErrors=true
        setValidationErrors(prev=>({...prev,postCode:STRING.WARNING.POST_CODE_REQUIRED}))
      }

      return haveErrors
    }

    const onSavePress=async()=>{
      const haveErrors=validationsCheck()
      if(!haveErrors){
        const res=await updateProfile({...registrationData,photo:imageData})
        console.log(res,"RESPONSE FROM API");

        alert("HEY")
      }

    }
    const imageUpload=(data)=>{
      console.log(data,"DATA HERE IS");
      setImageData(data)
    }

  return (
    <KeyboardAwareScrollView style={styles.mainCtr} >

      <View style={styles.imageCtr} >
      {imageData?.path ?
      <Image
      style={styles.profileImageStyles}
      source={{uri:imageData?.path}}
      />
      :
       <CustomImage
      url={userData?.photo}
      imageStyle={styles.profileImageStyles}
      />}
      <Pressable 
      onPress={()=>setImageUploadVisible(true)}
      style={styles.imgUploadCtr} 
      >
        {ICONS.IMAGE_UPLOAD(13,13)}
      </Pressable>
      </View>

      <CustomImageUpload visible={imageUploadVisible} setVisible={setImageUploadVisible} getImageData={(data)=>imageUpload(data)} />

    {REGISTRATION_FIELDS.map((item,index,arr)=>{
      return(
        <RegistrationItem key={index} item={item} />
      )
    }
    )}

    <CustomButton
    buttonLabel={STRING.SAVE}
    buttonStyle={styles.saveButton}
    onPress={onSavePress}
    />

    </KeyboardAwareScrollView>
  )
}

export default RegistrationDetails