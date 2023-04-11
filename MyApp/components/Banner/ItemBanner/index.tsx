/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import {styles} from './style';
import React from 'react';

interface Props {
  item?: any;
}

const ItemBanner = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.url} style={styles.bgImage} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default ItemBanner;
