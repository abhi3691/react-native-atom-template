import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 30,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: customColor.black,
  },
  lable: {
    fontSize: FontRatio(12),
    color: customColor.white,
  },
});

export default styles;
