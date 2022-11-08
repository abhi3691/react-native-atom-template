import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  Container: {
    height: ScreenRatio.height / 8,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  rowWrapper: {
    height: ScreenRatio.height / 10,
    width: ScreenRatio.width / 1.1,
    borderWidth: 0.3,
    borderColor: customColor.black,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: ScreenRatio.width / 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: FontRatio(12),
    color: customColor.black,
  },
  email: {
    fontSize: FontRatio(12),
    color: customColor.blue,
    fontStyle: 'italic',
  },
});

export default styles;
