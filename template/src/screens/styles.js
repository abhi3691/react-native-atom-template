import {StyleSheet} from 'react-native';
import FontRatio from '../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../global_functions/screen_ratio/ScreenRatio';
import customColor from '../theme/Color';
import Fonts from '../theme/Fonts';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FontRatio(30),
    color: customColor.black,
    width: ScreenRatio.width,
    textAlign: 'center',
    fontFamily: Fonts.POPPINSBLACK,
    margin: ScreenRatio.width / 5,
  },
  buttonContainer: {
    marginTop: ScreenRatio.height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width,
  },
});

export default styles;
