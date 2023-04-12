/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  item?: any;
  onChangePage?: any;
}

const CartIcon = require('../../assets/images/icons//cart2.png');

const ItemProduct = ({item, onChangePage}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.top} onPress={onChangePage}>
        {item?.sale && <Text style={styles.sale}>-{item.sale}%</Text>}
        {item?.new && <Text style={styles.new}>NEW</Text>}
        <Image style={styles.image} source={item.image} />
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        {item.favorite ? (
          <AntDesign
            name="heart"
            size={20}
            color={'#FE585A'}
            style={styles.favorite}
          />
        ) : (
          <AntDesign
            name="hearto"
            size={20}
            color={'#868889'}
            style={styles.favorite}
          />
        )}
      </Pressable>
      <View style={styles.bottom}>
        <Pressable style={styles.wrapCart}>
          <Image source={CartIcon} />
          <Text style={styles.textCart}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemProduct;
