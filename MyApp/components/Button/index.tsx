/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  background?: any;
  last?: boolean;
  style?: any;
}

const Button = (props: Props) => {
  const {title, onPress, icon, background, last, style} = props;
  return (
    <Pressable onPress={onPress} style={style}>
      <LinearGradient
        colors={[background ?? '#AEDC81', background ?? '#6CC51D']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {icon && (
          <Image
            source={icon}
            style={[styles.icon, last ? styles.last : styles.first]}
          />
        )}
        <Text style={[styles.text, background ? {color: '#000'} : {}]}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
