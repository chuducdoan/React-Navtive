/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

interface Props {
  title?: any;
  onPress?: any;
}

const Breadscrum = (props: Props) => {
  const {title, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <AntDesign name="right" size={18} onPress={onPress} color={'#868889'} />
    </View>
  );
};

export default Breadscrum;
