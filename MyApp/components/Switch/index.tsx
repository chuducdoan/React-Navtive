/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface Props {
  onValueChange?: any;
  value: any;
}

const Switch = (props: Props) => {
  const {value, onValueChange} = props;
  const isActive = value;

  return (
    <TouchableOpacity
      style={[styles.container, isActive ? styles.active : styles.default]}
      onPress={() => onValueChange(!value)}>
      <View
        style={[
          styles.around,
          isActive ? styles.roundActive : styles.roundDefault,
        ]}></View>
    </TouchableOpacity>
  );
};

export default Switch;
