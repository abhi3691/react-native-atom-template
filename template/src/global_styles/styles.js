import ScreenRatio from '../global_functions/screen_ratio/ScreenRatio'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height,
        width:ScreenRatio.width
    }
})

export default styles