/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const ProductImage = require('../../assets/images/product1.png');
const ProductImage2 = require('../../assets/images/product2.png');
const ProductImage3 = require('../../assets/images/product3.png');
const ProductImage6 = require('../../assets/images/product6.png');
const DeleteIcon = require('../../assets/images/icons/delete.png');

const productList = [
  {
    id: '1',
    image: ProductImage,
    price: '8.00',
    name: 'Fresh Peach',
    desc: 'dozen',
    qty: 2,
  },
  {
    id: '2',
    image: ProductImage2,
    price: '7.00',
    name: 'Avacoda',
    desc: '2.0 lbs',
    qty: 2,
  },
  {
    id: '3',
    image: ProductImage3,
    price: '9.90',
    name: 'Pineapple',
    desc: '1.50 lbs',
    favorite: true,
    qty: 2,
  },
  {
    id: '4',
    image: ProductImage,
    price: '7.05',
    name: 'Black Grapes',
    desc: '5.0 lbs',
    sale: 16,
    qty: 2,
  },
];

const Cart = () => {
  const navigation = useNavigation();

  const dataSw = productList.map(item => ({
    ...item,
    key: item.id,
    text: item.name,
  }));

  const renderItem = data => (
    <View style={styles.item}>
      <View>
        <Image source={data.item.image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.price}>
          ${data.item.price} x {data.item.qty}
        </Text>
        <Text style={styles.name}>{data.item.name}</Text>
        <Text style={styles.desc}>{data.item.desc}</Text>
      </View>
      <View style={styles.action}>
        <Pressable style={[styles.btnQuantity]}>
          <AntDesign name="plus" color={'#6CC51D'} size={20} />
        </Pressable>
        <Text style={styles.numberCart}>3</Text>
        <Pressable style={[styles.btnQuantity]}>
          <AntDesign name="minus" color={'#6CC51D'} size={20} />
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={dataSw}
        renderItem={renderItem}
        renderHiddenItem={(data, rowMap) => (
          <Pressable style={styles.delete}>
            <Image source={DeleteIcon} />
          </Pressable>
        )}
        // leftOpenValue={75}
        rightOpenValue={-75}
        style={styles.wrapContent}
      />
      <View style={styles.wrapCheckout}>
        <View style={styles.checkoutTop}>
          <Text style={styles.textCheckoutTop}>Subtotal</Text>
          <Text style={styles.textCheckoutTop}>$56.7</Text>
        </View>
        <View style={styles.checkoutTop}>
          <Text style={styles.textCheckoutTop}>Shipping charges</Text>
          <Text style={styles.textCheckoutTop}>$1.6</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.name}>Total</Text>
          <Text style={styles.name}>$58.2</Text>
        </View>
        <Button
          title={'Checkout'}
          onPress={() => navigation.navigate('ShippingMethod')}
        />
      </View>
    </View>
  );
};

export default Cart;
