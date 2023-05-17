import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomTextInput from '../../../../components/CustomTextInput'
import PhoneInput from 'react-native-phone-number-input'
import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { REGEX, REGISTRATION_FIELD_NUMBER, STRING } from '../../../../theme/Constants'
import DatePicker from 'react-native-date-picker'
import CustomButton from '../../../../components/CustomButton'
import { Country, State, City }  from 'country-state-city';
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment'
import { showMessage } from 'react-native-flash-message'

const ResistrationItem = ({item}) => {
    console.log(item,"ITEMSS");

    const [openDOB,setOpenDOB]=useState(false)
    const [date, setDate] = useState(new Date())

    const phoneInputRef = useRef(null);

    const renderPhoneInput=()=>{
        return(
        <View style={styles.mainPhoneCtr} >
        <Text style={styles.phoneTitle} >{STRING.HEADING.PHONE_NUMBER}</Text>
        <PhoneInput
          ref={phoneInputRef}
        defaultValue={item?.value}
        layout="first"
        onChangeText={(text) => {
            item?.setRegistrationData(prev=>({...prev,phoneNumber:text}))
            if(phoneInputRef.current?.isValidNumber(text)){
              item?.setValidationErrors(prev=>({...prev,phoneNumber:""}))
            }else{
              item?.setValidationErrors(prev=>({...prev,phoneNumber:STRING.WARNING.VALID_NUMBER}))
            }
        }}
        // onChangeFormattedText={(text) => {
        //   console.log(text,"FORMATTED TEXT");
        //     item?.setRegistrationData(prev=>({...prev,phoneNumber:text}))
        // }}
        containerStyle={styles.phoneCtr}
        textContainerStyle={styles.phoneTextCtr}
        codeTextStyle={styles.phoneTextStyle}
        />

        <View>
            <Text style={styles.warningText} >{item?.warningText}</Text>
        </View>
        </View>
            )
    }

    const renderDob=()=>{
      console.log(item?.value,"DOB VALUE");
      return(<>
        <CustomTextInput heading={item?.heading} dob dobValue={item?.value?moment(item?.value).format("DD/MM/YYYY") : "" } dobClick={()=>setOpenDOB(true)} warningVisible warningText={item?.warningText}/>
        <DatePicker
          modal
          open={openDOB}
          date={new Date()}
          onConfirm={(date) => {
            setOpenDOB(false)
            item?.setRegistrationData(prev=>({...prev,dob:date}))
          }}
          onCancel={() => {
            setOpenDOB(false)
          }}
          mode={'date'}
          maximumDate={new Date()}
        />
      </>)
    }

    const renderRegion=()=>{
      let arr=[]
        if(item?.number===REGISTRATION_FIELD_NUMBER.COUNTRY){
            arr=Country.getAllCountries()
          }else{
            console.log(item?.registrationData,"registrationData");
              arr=State.getStatesOfCountry(item?.registrationData?.country.isoCode)
          }
           return( 
            <View style={styles.mainPhoneCtr} >
            <Text style={styles.phoneTitle} >{item?.heading}</Text>
          <View style={styles.countryCtr} >
            <RNPickerSelect
              onValueChange={(value) =>{
                 console.log(value)
                if(item?.number===REGISTRATION_FIELD_NUMBER.COUNTRY){
                  item?.setRegistrationData(prev=>({...prev,country:value}))
                }else{
                  item?.setRegistrationData(prev=>({...prev,state:value}))
                }
                }
              }
              placeholder={{ label: "Select", value: null }}
              items={arr?.map(item=>({label:item?.name,value:item}))}
              useNativeAndroidPickerStyle={false}
              />
          </View>

          <View>
            <Text></Text>
        </View>

          </View>
        )
    }

    const onChange=(text)=>{
      switch (item?.number){
        case REGISTRATION_FIELD_NUMBER.FIRST_NAME:{
         firstNameFunc(text)
        }
        break
        case REGISTRATION_FIELD_NUMBER.LAST_NAME:{
         lastNameFunc(text)
        }
        break
        case REGISTRATION_FIELD_NUMBER.CITY:{
          item?.setRegistrationData(prev=>({...prev,city:text}))
         }
         break
         case REGISTRATION_FIELD_NUMBER.ADDRESS:{
          item?.setRegistrationData(prev=>({...prev,address:text}))
         }
         break
         case REGISTRATION_FIELD_NUMBER.POST_CODE:{
          item?.setRegistrationData(prev=>({...prev,postCode:text}))
         }
         break
      }
    }

    const firstNameFunc=(text)=>{
      const regex=REGEX.FIRST_NAME
      if(regex.test(text)){
        item?.setRegistrationData(prev=>({...prev,firstName:text}))
        item?.setValidationErrors(prev=>({...prev,firstName:""}))
      }else{
        item?.setRegistrationData(prev=>({...prev,firstName:text}))
        if(!!text){
          item?.setValidationErrors(prev=>({...prev,firstName:STRING.WARNING.VALID_NAME}))
        }else{
          item?.setValidationErrors(prev=>({...prev,firstName:STRING.WARNING.FIRST_NAME_EMPTY}))
        }
      }
    }

    const lastNameFunc=(text)=>{
      const regex=REGEX.FIRST_NAME
      if(regex.test(text)){
        item?.setRegistrationData(prev=>({...prev,lastName:text}))
        item?.setValidationErrors(prev=>({...prev,lastName:""}))
      }else{
        item?.setRegistrationData(prev=>({...prev,lastName:text}))
        if(!!text){
          item?.setValidationErrors(prev=>({...prev,lastName:STRING.WARNING.VALID_NAME}))
        }else{
          item?.setValidationErrors(prev=>({...prev,lastName:STRING.WARNING.LAST_NAME_EMPTY}))
        }
      }
    }
    
  return (<>
  {
      item?.phoneNumber?
      renderPhoneInput()
      :
      item?.dob?
      renderDob()
      :
      item?.region?
      renderRegion()
      :
      <CustomTextInput
      heading={item?.heading}
      textPlaceholder={item?.placeholder}
      disabled={item?.disabled}
      value={item?.value}
      onChange={onChange}
      warningVisible
      warningText={item?.warningText}
      numericKeyboard={item?.number === REGISTRATION_FIELD_NUMBER.POST_CODE}
      />
    }
    </>
  )
}

export default React.memo(ResistrationItem)