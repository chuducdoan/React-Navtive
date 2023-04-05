/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, View} from 'react-native';
import Item from './Item';
import {styles} from './style';
import Pagination from './Pagination';
import {useRef, useState} from 'react';

const AppleImage = require('../../assets/images/apple.png');
const EggImage = require('../../assets/images/egg.png');
const LemonImage = require('../../assets/images/lemon.png');
const FruitcartImage = require('../../assets/images/fruitcart.png');
const BigCatImage = require('../../assets/images/bigCart.png');

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

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  const renderItem = ({item}: any) => {
    return <Item item={item} />;
  };

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems, changed}: any) => {
      console.log('index: ', changed);
      setIndex(viewableItems[0].index);
    },
  ).current;

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
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      <Pagination data={dataList} current={index} />
    </View>
  );
};

export default Carousel;
