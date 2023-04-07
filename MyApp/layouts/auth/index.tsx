/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './style';
import {Button} from '../../components';

interface Props {
  bgImage?: any;
  mainContent?: any;
  onChangePage?: any;
  descFooter?: string;
  mainFooter?: string;
}

const AuthLayout = ({
  bgImage,
  mainContent,
  onChangePage,
  descFooter,
  mainFooter,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={bgImage} />
      <View style={styles.wrapContent}>
        <View>{mainContent}</View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>{descFooter}</Text>
          <Pressable onPress={onChangePage}>
            <Text style={styles.textLogin}>{mainFooter}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AuthLayout;
