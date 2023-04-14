/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
const BackArrowIcon2 = require('../../assets/images/icons/backArrow2.png');
const FilterBlackIcon = require('../../assets/images/icons/filterBlack.png');

const HeaderThirt = props => {
  const title = getHeaderTitle(props.options, props.route.name);
  const navigation = useNavigation();

  const hanldeOnPress = () => {
    navigation.goBack();
  };

  const hanldeOnChangeFilterPage = () => {
    navigation.navigate('Filter');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={hanldeOnPress}>
        <Image source={BackArrowIcon2} />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <Pressable style={styles.filter} onPress={hanldeOnChangeFilterPage}>
        <Image source={FilterBlackIcon} />
      </Pressable>
    </View>
  );
};

export default HeaderThirt;
