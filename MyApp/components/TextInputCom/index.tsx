/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Image, View, TextInput, StyleSheet, Pressable} from 'react-native';
import {styles} from './style';
import React from 'react';
const EyeIcon = require('../../assets/images/icons/eye.png');
const CloseEyeIcon = require('../../assets/images/icons/closeEye.png');

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  background?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  password?: any;
}

const TextInputCom = (props: Props) => {
  const {icon, background = '#fff', password} = props;
  const [isShow, setIsShow] = useState(true);

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
      <TextInput
        style={styles.textInput}
        {...props}
        secureTextEntry={password && isShow}
      />
      {password && (
        <Pressable
          style={styles.iconBack}
          onPress={() => setIsShow(prev => !prev)}>
          <Image source={isShow ? CloseEyeIcon : EyeIcon} />
        </Pressable>
      )}
    </View>
  );
};

export default TextInputCom;
