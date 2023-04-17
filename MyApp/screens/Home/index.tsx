/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Banner,
  Breadscrum,
  Category,
  ItemProduct,
  Search,
} from '../../components';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

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

const Home = () => {
  const navigation = useNavigation();

  const handleOnChangePage = id => {
    navigation.navigate('Detail', {
      productId: id,
    });
  };

  const handleOnChangePageCategory = () => {
    navigation.navigate('Category');
  };

  const handleOnChangePageCategoryDetail = () => {
    navigation.navigate('CategoryDetail', {
      title: 'Featured Products',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#fff', '#F4F5F9']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}>
        <ScrollView style={styles.content}>
          <Search onFilter={() => navigation.navigate('Filter')} />
          <View style={{marginBottom: 20}}>
            <Banner />
          </View>
          <View style={{marginBottom: 17}}>
            <Breadscrum
              title="Categories"
              onPress={handleOnChangePageCategory}
            />
          </View>
          <View style={{marginBottom: 32}}>
            <Category />
          </View>
          <View style={{marginBottom: 21}}>
            <Breadscrum
              title="Featured products"
              onPress={handleOnChangePageCategoryDetail}
            />
          </View>
          <View style={styles.productWrap}>
            {productList.map((item, index) => (
              <View style={styles.productItem} key={index}>
                <ItemProduct
                  item={item}
                  key={item.id}
                  onChangePage={() => handleOnChangePage(item.id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
