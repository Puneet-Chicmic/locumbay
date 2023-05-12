import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/Variables'
import { styles } from './styles'

const CustomLoader = ({visible}) => {
  return (
    <Modal
     visible={visible}
     transparent
    animationType={'fade'}
     >
         <View style={styles.mainCtr}>
        <ActivityIndicator size={"large"} color={COLORS.PRIMARY} />
         </View>
        
    </Modal>
  )
}

export default CustomLoader