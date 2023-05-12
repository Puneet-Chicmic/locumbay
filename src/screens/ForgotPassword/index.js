import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ICONS } from '../../theme/Icon'
import { REGEX, STRING } from '../../theme/Constants'
import { IMAGES } from '../../theme/Images'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import { useLoginMutation } from '../../services/modules/login'
import { showMessage, hideMessage } from "react-native-flash-message";
import CustomLoader from '../../components/CustomLoader'
import { useDispatch } from 'react-redux'
import { updateToken } from '../../store/common'

const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [emailWarningToggle,setEmailWarningToggle]=useState(false)
    const [login, { data, isLoading, isError, isSuccess, error }] = useLoginMutation()
    const dispatch=useDispatch()
  
    const updateEmail=(text)=>{
      let reg = REGEX.EMAIL;
      if (reg.test(text) != false || text.length == 0) {
        setEmailWarningToggle(false);
      } else {
        setEmailWarningToggle(true);
      }
      setEmail(text)
    }
  
    const updatePassword=(text)=>{
      setPassword(text)
    }
  
    const loginPress= async ()=>{
      let loginData = await login({
        email:email,
        password:password,
        is_staff:1
      })
      if(loginData?.error){
        if(loginData?.error?.status===400){
          showMessage({
            message: loginData?.error?.data?.message,
            type: 'danger',
          });
        }else{
          showMessage({
            message: STRING.FLASH_MESSAGE.TRY_AGAIN,
            type: 'danger',
          });
        }
      }else{
        dispatch(updateToken({token:loginData?.data?.token}))
        showMessage({
          message: loginData?.data?.message,
          type: 'success',
        });
      }
      console.log(loginData,"loginData");
    }
  
    return (
      <SafeAreaView style={styles.mainCtr} >
        <CustomLoader visible={isLoading} />
        <View style={styles.subCtr}>
          
        <Image
        source={IMAGES.LOCUMBAY_LOGO}
        style={styles.image}
        resizeMode={"contain"}
        />
  
        <View>
        <Text style={styles.loginText} >{STRING.FORGOT_PASSWORD2}</Text>
        </View>
  
        <CustomTextInput
        textPlaceholder={STRING.PLACEHOLDER.EMAIL}
        heading={STRING.HEADING.EMAIL}
        icon
        iconName={ICONS.MAIL}
        value={email}
        onChange={updateEmail}
        warningText={STRING.WARNING.EMAIL}
        warningVisible={emailWarningToggle}
        />
  
        <CustomButton
                  buttonLabel={STRING.LOGIN}
                  buttonStyle={[styles.loginBtn,{opacity:emailWarningToggle || !email.length || !password.length?0.8:1}]}
                  // labelStyle={styles.joinChannelText}
                  onPress={loginPress}
                  disabled={emailWarningToggle  || !email.length || !password.length}
        />
  
        <View>
          <Text style={styles.forgotPasswordText} >{STRING.FORGOT_PASSWORD}</Text>
          </View>
  
        </View>
      </SafeAreaView>
    )
}

export default ForgotPassword