import { View, Text, Alert } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';

const CustomImageUpload = ({
    visible,
    setVisible,
    getImageData=()=>{}
}) => {

    const openGallery = () => {
        ImagePicker.openPicker({
          width: 800,
          height: 1000,
          cropping: true,
          compressImageQuality:0.8,
          multiple: false,
          includeBase64:true
        }).then(async image => { 
            setVisible(false)
            getImageData(image)
        });
      };
    
      const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
              setVisible(false)
            getImageData(image)
          });
      };

  return (
   visible? Alert.alert(
        'Add image from',
        '',
        [
            {text: 'Gallery', onPress: () => openGallery()},
            {text: 'Camera', onPress: () => openCamera()},
            {text: 'Cancel', onPress: () => {setVisible(false)}, style: 'cancel'},
        ],
      )
    :
    null
  )
}

export default React.memo(CustomImageUpload)