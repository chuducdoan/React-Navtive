/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Pressable, Text, View} from 'react-native';
import {styles} from './style';
import React from 'react';

interface Props {
  data: any;
  current: number;
  isBanner?: boolean;
  onNextItem?: any;
}

const Pagination = ({data, current, isBanner, onNextItem}: Props) => {
  return (
    <View style={!isBanner ? styles.container : styles.containerBanner}>
      {isBanner && (
        <Pressable>
          <Text style={styles.textPagination}>Skip</Text>
        </Pressable>
      )}
      <View style={styles.content}>
        {data.map((item: any, index: number) => (
          <View
            key={item.id}
            style={[styles.dot, current === index ? styles.active : styles.dot]}
          />
        ))}
      </View>
      {isBanner && (
        <Pressable onPress={onNextItem}>
          <Text style={styles.textPagination}>Next</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Pagination;
