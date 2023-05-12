import { RFValue } from 'react-native-responsive-fontsize'

import LOCUMBAY_LOGO from '@/Assets/svg/locumbayLogo.svg'
import MAIL from '@/Assets/svg/mail.svg'
import OPEN_EYE from '@/Assets/svg/openEye.svg'



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
}