import { PixelRatio } from 'react-native';
const FontRatio = (size) => {
    const scale = screenWidth / 320;
    const newSize = size * scale;
    let calculatedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));

    if (PixelRatio.get() < 3) {
        return calculatedSize - 0.5;
    }
    return calculatedSize;
};

export default FontRatio;
