import React, { Children } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ImageBackground,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'
import { styles } from './styles'

const W = Dimensions.get('window').width
const H = Dimensions.get('window').height
const CustomButton = ({
  buttonLabel,
  buttonStyle,
  labelStyle,
  onPress,
  leftChild,
  rightChild,
  rightChildStyle,
  leftChildStyle,
  disabled = false,
  icon,
  iconStyle,
  children
}) => {
  return (
    
//     <LinearGradient
//     start={{x: 0, y: 0.3}} end={{x: 0, y: 0.8}}
//   // locations={[0,1]}
//   colors={ needDisabled && disabled ?['#8F826420', '#8F826420'] :['#A59575', '#685E45'] }
 
//   style={[styles.buttonContainer, buttonStyle]}
//   angle={180}
//     >
<View>
<ImageBackground
source={require('../../Assets/images/buttonBackground.png')}
style={[styles.buttonContainer, buttonStyle]}
borderRadius={RFValue(12)}
>
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}
    >

      {leftChild ? <View style={[leftChildStyle]}>{leftChild}</View> : null}

      {buttonLabel ? (
        <View>
          <Text style={[styles.textStyle, labelStyle]}>{buttonLabel}</Text>
        </View>
      ) : null}

      {rightChild ? (
        <View style={[{ alignItems: 'center' }, rightChildStyle]}>
          {rightChild}
        </View>
      ) : null}

      {icon ? (
        <View style={[iconStyle, { alignSelf: 'center' }]}>{icon}</View>
      ) : null}

      {children}

    </TouchableOpacity>
    </ImageBackground>
</View>
    // </LinearGradient>
  )
}

export default CustomButton
