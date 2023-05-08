/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Paragraph} from '../../components';
import {styles} from './style';

const MemberImage = require('../../assets/images/member.png');

const Reviews = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.top}>
            <Image source={MemberImage} style={styles.image} />
            <View>
              <Paragraph size={15} weight="600" lineHeight={22} color="#000">
                Haylie Aminoff
              </Paragraph>
              <Paragraph size={10} weight="500" lineHeight={15} color="#868889">
                32 minutes ago
              </Paragraph>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.wrapReview}>
              <Paragraph size={12} weight="500" lineHeight={18} color="#000">
                4.5
              </Paragraph>
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
                  name="star-o"
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
            </View>
            <Paragraph size={12} weight="400" lineHeight={18} color="#868889">
              Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed
              diam nonumy
            </Paragraph>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.top}>
            <Image source={MemberImage} style={styles.image} />
            <View>
              <Paragraph size={15} weight="600" lineHeight={22} color="#000">
                Carla Septimus
              </Paragraph>
              <Paragraph size={10} weight="500" lineHeight={15} color="#868889">
                32 minutes ago
              </Paragraph>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.wrapReview}>
              <Paragraph size={12} weight="500" lineHeight={18} color="#000">
                4.5
              </Paragraph>
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
                  name="star-o"
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
            </View>
            <Paragraph size={12} weight="400" lineHeight={18} color="#868889">
              Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed
              diam nonumy
            </Paragraph>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.top}>
            <Image source={MemberImage} style={styles.image} />
            <View>
              <Paragraph size={15} weight="600" lineHeight={22} color="#000">
                Carla Septimus
              </Paragraph>
              <Paragraph size={10} weight="500" lineHeight={15} color="#868889">
                32 minutes ago
              </Paragraph>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.wrapReview}>
              <Paragraph size={12} weight="500" lineHeight={18} color="#000">
                4.5
              </Paragraph>
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
                  name="star-o"
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
            </View>
            <Paragraph size={12} weight="400" lineHeight={18} color="#868889">
              Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed
              diam nonumy
            </Paragraph>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.top}>
            <Image source={MemberImage} style={styles.image} />
            <View>
              <Paragraph size={15} weight="600" lineHeight={22} color="#000">
                Carla Septimus
              </Paragraph>
              <Paragraph size={10} weight="500" lineHeight={15} color="#868889">
                32 minutes ago
              </Paragraph>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.wrapReview}>
              <Paragraph size={12} weight="500" lineHeight={18} color="#000">
                4.5
              </Paragraph>
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
                  name="star-o"
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
            </View>
            <Paragraph size={12} weight="400" lineHeight={18} color="#868889">
              Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed
              diam nonumy
            </Paragraph>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Reviews;
