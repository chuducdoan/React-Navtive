/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const ProductImage = require('../../assets/images/productImage.png');
const CartIcon = require('../../assets/images/icons/cart.png');

interface Props {
  favorite?: boolean;
}

const Detail = ({favorite}: Props) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ProductImage} />
      <View style={styles.content}>
        {favorite ? (
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
        <Text style={styles.price}>$2.22</Text>
        <Text style={styles.name}>Organic Lemons</Text>
        <Text style={styles.unit}>1.50 lbs</Text>
        <View style={styles.review}>
          <Text style={styles.numberStart}>4.5</Text>
          <View style={styles.starReview}>
            <FontAwesome
              name="star"
              size={15}
              color={'#FFC107'}
              style={styles.itemStart}
            />
            <FontAwesome
              name="star"
              size={15}
              color={'#FFC107'}
              style={styles.itemStart}
            />
            <FontAwesome
              name="star"
              size={15}
              color={'#FFC107'}
              style={styles.itemStart}
            />
            <FontAwesome
              name="star-half-empty"
              size={15}
              color={'#FFC107'}
              style={styles.itemStart}
            />
            <FontAwesome
              name="star-o"
              size={15}
              color={'#FFC107'}
              style={styles.itemStart}
            />
          </View>
          <Text style={styles.countReview}>(89 reviews)</Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.unit}>
            Organic Mountain works as a seller for many organic growers of
            organic lemons. Organic lemons are easy to spot in your produce
            aisle. They are just like regular lemons, but they will usually have
            a few more scars on the outside of the lemon skin. Organic lemons
            are considered to be the world's finest lemon for juicing
            {/* <Pressable>
              <Text style={styles.textMore}>more</Text>
            </Pressable> */}
          </Text>
        </View>
        <View style={styles.action}>
          <Text style={styles.textCart}>Quantity</Text>
          <Pressable style={[styles.btnQuantity, styles.decrea]}>
            <AntDesign name="minus" color={'#6CC51D'} size={20} />
          </Pressable>
          <Text style={styles.numberCart}>3</Text>
          <Pressable style={[styles.btnQuantity, styles.increa]}>
            <AntDesign name="plus" color={'#6CC51D'} size={20} />
          </Pressable>
        </View>
        <Button
          title={'Add to cart'}
          icon={CartIcon}
          last
          onPress={handleOnPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
