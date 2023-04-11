/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
const BackArrowIcon = require('../../assets/images/icons/backArrow.png');

const Header = props => {
  const title = getHeaderTitle(props.options, props.route.name);
  const navigation = useNavigation();

  const hanldeOnPress = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#000000', 'rgba(0, 0, 0, 0)']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Pressable style={styles.back} onPress={hanldeOnPress}>
        <Image source={BackArrowIcon} />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

export default Header;
