/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
const BackArrowIcon2 = require('../../assets/images/icons/backArrow2.png');

const HeaderSecondary = props => {
  const title = getHeaderTitle(props.options, props.route.name);
  const navigation = useNavigation();

  const hanldeOnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={hanldeOnPress}>
        <Image source={BackArrowIcon2} />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderSecondary;
