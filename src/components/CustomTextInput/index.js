import {
    ActivityIndicator,
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native'
  import { RFValue } from 'react-native-responsive-fontsize'
  import React, { useState } from 'react'
import { ICONS } from '../../theme/Icon'
import { styles } from './styles'
import { COLORS, FONT_FAMILY } from '../../theme/Variables'
import { STRING } from '../../theme/Constants'
  
  const W = Dimensions.get('window').width
  const H = Dimensions.get('window').height
  const CustomTextInput = ({
    heading,
    textPlaceholder,
    icon,
    iconName,
    secureIcon,
    onChange=()=>{},
    disabled,
    numericKeyboard,

    dob,
    dobValue,
    dobClick,

    maxLength,
    searchIcon,
    InputStyle,
    value,
    desc,
    numberOfLines = 1,
    textInputStyle,
    multiline,
    textAlignVertical,
    warningText,
    warningVisible=false,
  }) => {
    const [eyeToggle,setEyeToggle]=useState(true)
    return (
      <View style={styles.mainCtr} >
        {/* ---------------------------------------Heading---------------------------------------------- */}
        {heading &&<Text style={styles.text}>{heading}</Text>}

        {/* ---------------------------------------Main Container---------------------------------------------- */}

      <View
        style={[
          styles.subCtr,
          disabled && styles.disabledCtr ,
          InputStyle,
        ]}
      >
        {/* --------------------------------------- DOB ---------------------------------------------- */}
        {dob ?
        <TouchableOpacity onPress={dobClick} style={styles.dobBtn} >
          <Text style={styles.dobText} >{!!dobValue?dobValue:STRING.PLACEHOLDER.DEFAULT_DATE}</Text>
          {ICONS.CALENDAR(20,20)}
        </TouchableOpacity>
        :
        
        <View
          style={styles.textinputCtr}
        >
        {/* ---------------------------------------Text Input View---------------------------------------------- */}
          {searchIcon &&
            (
               isSearchLoading ? (
              <View
              style={{ marginLeft:searchMessageCheck? W * 0.05 :0 }}
              >
                <ActivityIndicator size={'small'} color={'#A59575'} />
              </View>
            ) : (
              <View
              style={{ marginLeft:searchMessageCheck? W * 0.05 :0 }}
              >
                <BrownSearch height={16} width={16} />
              </View>
            ))}
  
          <TextInput
            style={[
             styles.textinput,
              textInputStyle,
            ]}
            placeholder={textPlaceholder}
            placeholderTextColor={COLORS.PRIMARY_FADED}
            onChangeText={e => onChange(e)}
            multiline={multiline}
            value={value}
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
            maxLength={maxLength}
            editable={!disabled}

            secureTextEntry={secureIcon?eyeToggle:false}
            keyboardType={numericKeyboard ? "number-pad" : "default" }
          />
        </View>}
        <View>
          {icon && (
            <TouchableOpacity
              disabled
            >
              {iconName(20, 20)}
            </TouchableOpacity>
          )}
           {secureIcon && (
            <TouchableOpacity
            onPress={() => setEyeToggle(previousState => !previousState)}
              
            >
              {eyeToggle? ICONS.OPEN_EYE(20, 20) : ICONS.OPEN_EYE(20, 20) }
            </TouchableOpacity>
          )}

        </View>
      </View>

        {/* ---------------------------------------Warnings---------------------------------------------- */}
      <View>
            <Text style={styles.warningText} > {warningVisible? warningText : ""}</Text>
      </View>
    </View>
    )
  }
  
  export default React.memo(CustomTextInput)
  