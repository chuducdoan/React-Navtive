import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Carousel} from '../../components';
import {useNavigation} from '@react-navigation/native';

const DefaultScreen = () => {
  const navigation = useNavigation();

  const handleOnStart = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.container}>
      <Carousel onStart={handleOnStart} />
    </View>
  );
};

export default DefaultScreen;
