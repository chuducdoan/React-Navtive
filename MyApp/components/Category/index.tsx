/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './style';

const VegetablesImage = require('../../assets/images/Vegetables.png');
const FruitsImage = require('../../assets/images/Fruits.png');
const BeveragesImage = require('../../assets/images/Beverages.png');
const GroceryImage = require('../../assets/images/Grocery.png');
const EdibleoilImage = require('../../assets/images/Edibleoil.png');
const HouseholdImage = require('../../assets/images/Household.png');

const dataList = [
  {
    id: '1',
    title: 'Vegetables',
    url: VegetablesImage,
    color: '#E6F2EA',
  },
  {
    id: '2',
    title: 'Fruits',
    url: FruitsImage,
    color: '#FFE9E5',
  },
  {
    id: '3',
    title: 'Beverages',
    url: BeveragesImage,
    color: '#FFF6E3',
  },
  {
    id: '4',
    title: 'Grocery',
    url: GroceryImage,
    color: '#F3EFFA',
  },
  {
    id: '5',
    title: 'Edible oil',
    url: EdibleoilImage,
    color: '#DCF4F5',
  },
  {
    id: '6',
    title: 'Household',
    url: HouseholdImage,
    color: '#FFE8F2',
  },
];

const Banner = () => {
  const renderItem = ({item}: any) => {
    return (
      <View>
        <View style={[{backgroundColor: item.color}, styles.image]}>
          <Image source={item.url} />
        </View>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={styles.content}
      />
    </View>
  );
};

export default Banner;
