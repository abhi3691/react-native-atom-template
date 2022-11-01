import {TouchableHighlight, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const TextButton = ({lable, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="transparent"
      onPress={onPress}>
      <Text style={styles.lable}>{lable}</Text>
    </TouchableHighlight>
  );
};

export default TextButton;
