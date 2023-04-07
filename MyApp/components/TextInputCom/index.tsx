/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, TextInput, StyleSheet} from 'react-native';
import {styles} from './style';

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  background?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const TextInputCom = (props: Props) => {
  const {title, onPress, icon, background = '#fff'} = props;
  const stylesBG = StyleSheet.create({
    bg: {
      backgroundColor: background,
    },
  });
  return (
    <View style={[styles.container, stylesBG.bg]}>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default TextInputCom;
