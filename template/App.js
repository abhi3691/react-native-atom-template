import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ScreenRatio from './src/global_functions/screen_ratio/ScreenRatio';
import FontRatio from './src/global_functions/font_ratio/FontRatio';
import customColor from './src/theme/Color';
import Fonts from './src/theme/Fonts';
import ReactIcon from './src/assets/svg_icons/react.svg' 
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WELCOME TO REACT NATIVE ATOM </Text>
      <ReactIcon height={FontRatio(100)} width={FontRatio(100)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FontRatio(20),
    color: customColor.black,
    fontFamily:Fonts.POPPINSBLACK
  },
});

export default App;