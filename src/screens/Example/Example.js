import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../../components/CustomButton'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../store/common'
import { useNavigation } from '@react-navigation/native'
import { DATABASE, NAVIGATION } from '../../theme/Constants'
import database from '../../database'

const Example = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  
  useEffect(()=>{
    (async()=>{
      const p = await database.get(DATABASE.PROFILE).query()
      console.log(p,"DATA IN DB");
    })()
  },[])
  return (
    <View style={{backgroundColor:"#ffffff",height:"100%",alignItems:"center",justifyContent:"center"}} >
      <CustomButton
      buttonLabel={"Logout"}
      onPress={()=>dispatch(removeToken())}
      />

      <CustomButton
      buttonLabel={"Profile"}
      buttonStyle={{marginTop:10}}
      onPress={()=>navigation.navigate(NAVIGATION.PROFILE)}
      />
    </View>
  )
}

export default Example