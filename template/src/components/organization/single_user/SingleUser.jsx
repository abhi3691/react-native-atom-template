import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
const SingleUser = ({data}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.rowWrapper}>
        <Avatar.Image source={{uri: data.avatar}} size={FontRatio(60)} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>
            {data.firstName + ' ' + data.lastName}
          </Text>
          <Text style={styles.email}>{data.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleUser;
