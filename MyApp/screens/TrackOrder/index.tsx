/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './style';

const BoxActive = require('../../assets/images/box.png');
const PlaceActive = require('../../assets/images/place.png');
const ConfirmActive = require('../../assets/images/confirm.png');
const ShippedActive = require('../../assets/images/shipped.png');
const DeliveryActive = require('../../assets/images/DeliveryActive.png');
const DeliveredActive = require('../../assets/images/DeliveredActive.png');

const PlaceInActive = require('../../assets/images/placedGray.png');
const ConfirmInActive = require('../../assets/images/confirmGray.png');
const ShippedInActive = require('../../assets/images/ShippedGray.png');
const DeliveryInActive = require('../../assets/images/deliveryIcon.png');
const DeliveredInActive = require('../../assets/images/delivered.png');

const TrackOrder = () => {
  const [active, setActive] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={[styles.contentItem, styles.contentTop]}>
          <View style={[styles.wrapImage, styles.wrapActive]}>
            <Image source={BoxActive} />
          </View>
          <View style={styles.wrapContent}>
            <Text style={styles.mainTitle}>Order #90897 </Text>
            <Text style={styles.desc}>Placed on Octobar 19 2021</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.label}>Items: </Text>
                <Text style={styles.value}>10</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>Total: </Text>
                <Text style={styles.value}>$16.90</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentBottom}>
          <View style={[styles.contentItem, styles.cusItem]}>
            <View
              style={[
                styles.wrapImage,
                active >= 1 ? styles.wrapActive : null,
              ]}>
              <Image source={active >= 1 ? PlaceActive : PlaceInActive} />
            </View>
            <View style={[styles.wrapContent, styles.borderBottom]}>
              <Text style={styles.mainTitle}>Order Placed</Text>
              <Text style={styles.desc}>Octobar 21 2021</Text>
            </View>
          </View>
          <View style={[styles.contentItem, styles.cusItem]}>
            <View
              style={[
                styles.wrapImage,
                active >= 2 ? styles.wrapActive : null,
              ]}>
              <Image source={active >= 2 ? ConfirmActive : ConfirmInActive} />
              <View style={styles.line}></View>
            </View>
            <View style={[styles.wrapContent, styles.borderBottom]}>
              <Text style={styles.mainTitle}>Order Confirmed</Text>
              <Text style={styles.desc}>Octobar 21 2021</Text>
            </View>
          </View>
          <View style={[styles.contentItem, styles.cusItem]}>
            <View
              style={[
                styles.wrapImage,
                active >= 3 ? styles.wrapActive : null,
              ]}>
              <Image source={active >= 3 ? ShippedActive : ShippedInActive} />
              <View style={styles.line}></View>
            </View>
            <View style={[styles.wrapContent, styles.borderBottom]}>
              <Text style={styles.mainTitle}>Order Shipped</Text>
              <Text style={styles.desc}>Octobar 21 2021</Text>
            </View>
          </View>
          <View style={[styles.contentItem, styles.cusItem]}>
            <View
              style={[
                styles.wrapImage,
                active >= 4 ? styles.wrapActive : null,
              ]}>
              <Image source={active >= 4 ? DeliveryActive : DeliveryInActive} />
              <View style={styles.line}></View>
            </View>
            <View style={[styles.wrapContent, styles.borderBottom]}>
              <Text style={styles.mainTitle}>Out for Delivery</Text>
              <Text style={styles.desc}>Pending</Text>
            </View>
          </View>
          <View style={[styles.contentItem]}>
            <View
              style={[
                styles.wrapImage,
                active >= 5 ? styles.wrapActive : null,
              ]}>
              <Image
                source={active >= 5 ? DeliveredActive : DeliveredInActive}
              />
              <View style={styles.line}></View>
            </View>
            <View style={[styles.wrapContent, styles.borderBottom]}>
              <Text style={styles.mainTitle}>Order Delivered</Text>
              <Text style={styles.desc}>Pending</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackOrder;
