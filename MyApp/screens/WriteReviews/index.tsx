/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button, Paragraph, TextInputCom} from '../../components';
import {styles} from './style';

const PencilIcon = require('../../assets/images/icons/pencil.png');

const WriteReviews = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Paragraph size={20} weight="600" lineHeight={30} color="#000">
          What do you think ?
        </Paragraph>
        <Paragraph
          size={15}
          weight="500"
          lineHeight={22}
          color="#868889"
          style={{textAlign: 'center', marginTop: 11, maxWidth: 299}}>
          please give your rating by clicking on the stars below
        </Paragraph>
        <View style={styles.starReview}>
          <FontAwesome
            name="star"
            size={35}
            color={'#FFC107'}
            style={styles.itemStart}
          />
          <FontAwesome
            name="star"
            size={35}
            color={'#FFC107'}
            style={styles.itemStart}
          />
          <FontAwesome
            name="star"
            size={35}
            color={'#FFC107'}
            style={styles.itemStart}
          />
          <FontAwesome
            name="star-o"
            size={35}
            color={'#FFC107'}
            style={styles.itemStart}
          />
          <FontAwesome
            name="star-o"
            size={35}
            color={'#FFC107'}
            style={styles.itemStart}
          />
        </View>
        <TextInputCom
          multiline={true}
          numberOfLines={4}
          placeholder="Tell us about your experience"
          iconTextarea={PencilIcon}
        />
        <Button
          title={'Start shopping'}
          style={{width: '100%', marginTop: 12}}
        />
      </View>
    </ScrollView>
  );
};

export default WriteReviews;
