import React, { Children } from 'react'
import {
  Dimensions,
  Image
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { BASE_URL } from '../../config'
import { styles } from './styles'

const W = Dimensions.get('window').width
const H = Dimensions.get('window').height
const CustomImage = ({
  url,
  imageStyle
}) => {
    console.log(`${BASE_URL.slice(0,BASE_URL.length -1)}${url}`);
  return (
    <Image
    source={{uri:`${BASE_URL.slice(0,BASE_URL.length -1)}${url}`}}
    style={[styles.image,imageStyle]}
    />
  )
}
export default CustomImage