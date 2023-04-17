/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {ItemProduct} from '../../components';
import {styles} from './style';

const ProductImage = require('../../assets/images/product1.png');
const ProductImage2 = require('../../assets/images/product2.png');
const ProductImage3 = require('../../assets/images/product3.png');
const ProductImage6 = require('../../assets/images/product6.png');

const productList = [
  {
    id: '1',
    image: ProductImage,
    price: '8.00',
    name: 'Fresh Peach',
    desc: 'dozen',
  },
  {
    id: '2',
    image: ProductImage2,
    price: '7.00',
    name: 'Avacoda',
    desc: '2.0 lbs',
  },
  {
    id: '3',
    image: ProductImage3,
    price: '9.90',
    name: 'Pineapple',
    desc: '1.50 lbs',
    favorite: true,
  },
  {
    id: '4',
    image: ProductImage,
    price: '7.05',
    name: 'Black Grapes',
    desc: '5.0 lbs',
    sale: 16,
  },
  {
    id: '5',
    image: ProductImage,
    price: '2.09',
    name: 'Pomegranate',
    desc: '1.50 lbs',
    new: true,
  },
  {
    id: '6',
    image: ProductImage6,
    price: '3.00',
    name: 'Fresh B roccoli',
    desc: '1 kg',
  },
];

const CategorieDetail = () => {
  const navigation = useNavigation();

  const handleOnChangePage = id => {
    navigation.navigate('Detail', {
      productId: id,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapDetail}>
        {productList.map(item => (
          <View style={styles.productItem} key={item.id}>
            <ItemProduct
              item={item}
              key={item.id}
              onChangePage={() => handleOnChangePage(item.id)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategorieDetail;
