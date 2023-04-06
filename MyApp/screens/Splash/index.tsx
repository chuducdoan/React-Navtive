import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Carousel} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  const handleOnSkip = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Carousel isBanner onSkip={handleOnSkip} />
    </View>
  );
};

export default Splash;
