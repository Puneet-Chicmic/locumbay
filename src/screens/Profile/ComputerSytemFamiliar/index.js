import { View, Text } from 'react-native'
import React from 'react'
import CustomBox from '../../../components/CustomBox'
import { STRING } from '../../../theme/Constants'
import { styles } from './styles'

const ComputerSystemFamiliar = ({data}) => {
  return (
    <CustomBox>
        <Text style={styles.heading} >{STRING.HEADING.COMP_SYS_FAMILIAR}</Text>
        {!!data?.length ?
         <View>

        </View>
        :
        <View style={styles.noDataCtr}>
            <Text style={styles.noDataText} >{STRING.NO_DATA}</Text>
        </View>
        }
    </CustomBox>
  )
}

export default ComputerSystemFamiliar