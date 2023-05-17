import { RFValue } from 'react-native-responsive-fontsize'

import LOCUMBAY_LOGO from '@/Assets/svg/locumbayLogo.svg'
import MAIL from '@/Assets/svg/mail.svg'
import OPEN_EYE from '@/Assets/svg/openEye.svg'
import EDIT_PROFILE from '@/Assets/svg/editProfile.svg'
import GREEN_TICK from '@/Assets/svg/greenTick.svg'
import IMAGE_UPLOAD from '@/Assets/svg/imageUpload.svg'
import CALENDAR from '@/Assets/svg/calendar.svg'




const iconStyle = (
    width = 0,
    height = 0,
    color = 'black',
    borderColor = 'none',
  ) => ({
    width: RFValue(width),
    height: RFValue(height),
    fill: color,
    stroke: borderColor,
    
  })
  export const ICONS = {
    LOCUMBAY_LOGO: (...params) => <LOCUMBAY_LOGO {...iconStyle(...params)} />,
    MAIL: (...params) => <MAIL {...iconStyle(...params)} />,
    OPEN_EYE: (...params) => <OPEN_EYE {...iconStyle(...params)} />,
    EDIT_PROFILE: (...params) => <EDIT_PROFILE {...iconStyle(...params)} />,
    GREEN_TICK: (...params) => <GREEN_TICK {...iconStyle(...params)} />,
    IMAGE_UPLOAD: (...params) => <IMAGE_UPLOAD {...iconStyle(...params)} />,
    CALENDAR: (...params) => <CALENDAR {...iconStyle(...params)} />,
    
}