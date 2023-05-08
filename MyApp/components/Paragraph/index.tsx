/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  children: any;
  style?: any;
  size?: number;
  color?: string;
  weight?: string;
  lineHeight?: number;
}

const Paragraph = ({
  children,
  style,
  size,
  color,
  weight,
  lineHeight,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: size,
      fontWeight: weight,
      color: color,
      lineHeight: lineHeight,
    },
  });

  return <Text style={[style, styles.text]}>{children}</Text>;
};

export default Paragraph;
