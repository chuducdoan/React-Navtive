/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Dimensions, FlatList, Text, View} from 'react-native';
import Item from './Item';
import {styles} from './style';
import Pagination from './Pagination';
import {useRef, useState} from 'react';
import Button from '../Button';
import ItemSecondary from './ItemSecondary';

const AppleImage = require('../../assets/images/apple.png');
const EggImage = require('../../assets/images/egg.png');
const LemonImage = require('../../assets/images/lemon.png');
const FruitcartImage = require('../../assets/images/fruitcart.png');
const BigCatImage = require('../../assets/images/bigCart.png');

const GroceriesImage = require('../../assets/images/Groceries.png');
const PassionateImage = require('../../assets/images/Passionate.png');
const DeliveryImage = require('../../assets/images/Delivery.png');

const dataList2 = [
  {
    id: '1',
    title: 'Buy Grocery',
    url: GroceriesImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
  {
    id: '2',
    title: 'Fast Delivery',
    url: DeliveryImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
  {
    id: '3',
    title: 'Enjoy Quality Food',
    url: PassionateImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
];

const dataList = [
  {
    id: '1',
    title: 'Welcome to',
    url: FruitcartImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    subImg: BigCatImage,
  },
  {
    id: '2',
    title: 'Buy Quality Dairy Products',
    url: EggImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
  {
    id: '3',
    title: 'Buy Premium Quality Fruits',
    url: LemonImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
  {
    id: '4',
    title: 'Get Discounts On All Products',
    url: AppleImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
];

const {width} = Dimensions.get('window');

interface Props {
  isBanner?: boolean;
}

const Carousel = ({isBanner}: Props) => {
  const [index, setIndex] = useState<number>(0);

  const renderItem = ({item}: any) => {
    return isBanner ? <ItemSecondary item={item} /> : <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={isBanner ? dataList2 : dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={styles.content}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setIndex(Math.round(x / width));
        }}
      />
      <Pagination
        data={!isBanner ? dataList : dataList2}
        current={index}
        isBanner={isBanner}
      />
      {!isBanner && (
        <View style={styles.wrapButton}>
          <Button title={'Get started'} />
        </View>
      )}
    </View>
  );
};

export default Carousel;
