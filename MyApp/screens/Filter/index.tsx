/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {styles} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../components';
import {useState} from 'react';

const DiscountIcon = require('../../assets/images/icons/discount.png');
const ShippingIcon = require('../../assets/images/icons/shipping.png');
const DeliveryIcon = require('../../assets/images/icons/delivery.png');
const CheckmarkIcon = require('../../assets/images/icons/check-mark.png');
const CheckmarjActiveIcon = require('../../assets/images/icons/check-mark-active.png');

const Filter = () => {
  const [starRating, setStarRating] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [delivery, setDelivery] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.label}>Price Range</Text>
          <View style={styles.groupField}>
            <TextInput style={styles.input} placeholder="Min." />
            <TextInput style={styles.input} placeholder="Max." />
          </View>
        </View>
        <View style={styles.contentCenter}>
          <Text style={styles.label}>Star Rating</Text>
          <View style={styles.wrapRating}>
            <View style={styles.wrapStar}>
              <Pressable
                onPress={() => {
                  let star = 0;
                  if (starRating === 1) {
                    star = 0;
                  } else {
                    star = 1;
                  }
                  setStarRating(star);
                }}>
                <FontAwesome
                  name={starRating >= 1 ? 'star' : 'star-o'}
                  size={15}
                  color={'#FFC107'}
                  style={styles.itemStart}
                />
              </Pressable>
              <Pressable onPress={() => setStarRating(2)}>
                <FontAwesome
                  name={starRating >= 2 ? 'star' : 'star-o'}
                  size={15}
                  color={'#FFC107'}
                  style={styles.itemStart}
                />
              </Pressable>
              <Pressable onPress={() => setStarRating(3)}>
                <FontAwesome
                  name={starRating >= 3 ? 'star' : 'star-o'}
                  size={15}
                  color={'#FFC107'}
                  style={styles.itemStart}
                />
              </Pressable>
              <Pressable onPress={() => setStarRating(4)}>
                <FontAwesome
                  name={starRating >= 4 ? 'star' : 'star-o'}
                  size={15}
                  color={'#FFC107'}
                  style={styles.itemStart}
                />
              </Pressable>
              <Pressable onPress={() => setStarRating(5)}>
                <FontAwesome
                  name={starRating >= 5 ? 'star' : 'star-o'}
                  size={15}
                  color={'#FFC107'}
                  style={styles.itemStart}
                />
              </Pressable>
            </View>
            <Text style={styles.textRating}>{starRating} stars</Text>
          </View>
        </View>
        <View style={styles.contentBottom}>
          <Text style={styles.label}>Others</Text>
          <View>
            <Pressable
              style={[styles.row, styles.borderBottom]}
              onPress={() => setDiscount(!discount)}>
              <Image source={DiscountIcon} style={styles.imgFirst} />
              <Text style={[styles.textOther, styles.textRating]}>
                Discount
              </Text>
              <Image source={discount ? CheckmarjActiveIcon : CheckmarkIcon} />
            </Pressable>
            <Pressable
              style={[styles.row, styles.borderBottom]}
              onPress={() => setShipping(!shipping)}>
              <Image source={ShippingIcon} style={styles.imgFirst} />
              <Text style={[styles.textOther, styles.textRating]}>
                Free shipping
              </Text>
              <Image source={shipping ? CheckmarjActiveIcon : CheckmarkIcon} />
            </Pressable>
            <Pressable
              style={styles.row}
              onPress={() => setDelivery(!delivery)}>
              <Image source={DeliveryIcon} style={styles.imgFirst} />
              <Text style={[styles.textOther, styles.textRating]}>
                Same day delivery
              </Text>
              <Image source={delivery ? CheckmarjActiveIcon : CheckmarkIcon} />
            </Pressable>
          </View>
        </View>
      </View>
      <Button title={'Apply filter'} style={styles.btn} />
    </SafeAreaView>
  );
};

export default Filter;
