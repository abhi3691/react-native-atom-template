import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import ScreenRatio from '../global_functions/screen_ratio/ScreenRatio';
import FontRatio from '../global_functions/font_ratio/FontRatio';
import customColor from '../theme/Color';
import Fonts from '../theme/Fonts';
import ReactIcon from '../assets/svg_icons/react.svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import TextButton from '../components/atom/button/TextButton';
import {useNavigation} from '@react-navigation/native';
import usegetUserDetails from '../hooks/get_user_Details/usegetUserDetails';
import styles from './styles';
const HomeScreen = () => {
  //hooks
  const [getUserDetails, userData] = usegetUserDetails();
  const navigation = useNavigation();

  const progress = useSharedValue(0.5); //reanimated Intial Progress Set

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  }); //reAnimated Animated Style Set

  //animation Redring Function
  React.useEffect(() => {
    progress.value = withRepeat(withSpring(2), 3, true);
  }, []);

  React.useEffect(() => {
    if (userData == false) {
      getUserDetails();
    }
  }, [userData]);

  //navigate to  User List
  const gotListView = async () => {
    if (userData != false && userData.length != 0) {
      navigation.navigate('userList', {data: userData});
    } else {
      Alert.alert('Error', 'Users Not Found');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} numberOfLines={2}>
        WELCOME TO REACT NATIVE ATOM{' '}
      </Text>
      <Animated.View style={rStyle}>
        <ReactIcon height={FontRatio(100)} width={FontRatio(100)} />
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TextButton lable="Go TO User List" onPress={() => gotListView()} />
      </View>
    </View>
  );
};

export default HomeScreen;
