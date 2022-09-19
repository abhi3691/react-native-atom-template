import {PixelRatio} from 'react-native';
import ScreenRatio from '../screen_ratio/ScreenRatio';
const FontRatio = size => {
  const scale = (ScreenRatio.width / ScreenRatio.height) * 2;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default FontRatio;
