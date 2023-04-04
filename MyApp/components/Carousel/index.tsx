import {FlatList, View} from 'react-native';
import Item from './Item';
import {styles} from './style';

const AppleImage = require('../../assets/images/apple.png');
const EggImage = require('../../assets/images/egg.png');
const LemonImage = require('../../assets/images/lemon.png');
const FruitcartImage = require('../../assets/images/fruitcart.png');
const BigCatImage = require('../../assets/images/bigCart.png');

const dataList = [
  {
    id: '1',
    title: 'Get Discounts On All Products',
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
    title: 'Buy Premium Quality Fruits',
    url: AppleImage,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
  },
];

const Carousel = () => {
  const renderItem = ({item}: any) => {
    return <Item item={item} />;
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
      />
    </View>
  );
};

export default Carousel;
