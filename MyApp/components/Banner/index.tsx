/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import ItemBanner from './ItemBanner';
import {styles} from './style';

const Banner1Image = require('../../assets/images/banner1.png');
const PassionateImage = require('../../assets/images/Passionate.png');
const DeliveryImage = require('../../assets/images/Delivery.png');

const dataList = [
  {
    id: '1',
    title: '20% off on your first purchase',
    url: Banner1Image,
  },
  {
    id: '2',
    title: '20% off on your first purchase',
    url: Banner1Image,
  },
  {
    id: '3',
    title: '20% off on your first purchase',
    url: Banner1Image,
  },
];

const {width} = Dimensions.get('window');

const Banner = () => {
  const [index, setIndex] = useState<number>(0);
  const [initIndex, setInitIndex] = useState<number>(0);
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: initIndex,
      animated: true,
    });
  }, [initIndex]);

  const renderItem = ({item}: any) => {
    return <ItemBanner item={item} />;
  };

  // const handleOnNextItem = () => {
  //   if (initIndex >= dataList2.length - 1) {
  //     onSkip?.();
  //     return;
  //   }
  //   setInitIndex(initIndex + 1);
  // };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={dataList}
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
        initialScrollIndex={initIndex}
      />
      {/* <Pagination
        data={!isBanner ? dataList : dataList2}
        current={index}
        isBanner={isBanner}
        onNextItem={handleOnNextItem}
        onSkip={onSkip}
      />
      {!isBanner && (
        <View style={styles.wrapButton}>
          <Button title={'Get started'} onPress={onStart} />
        </View>
      )} */}
    </View>
  );
};

export default Banner;
