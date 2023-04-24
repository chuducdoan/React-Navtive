/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button, DatePicker, Step, Switch, TextInputCom} from '../../components';
import {styles} from './style';
import React from 'react';
import {cc_format} from '../../utils/unit';
import {useNavigation} from '@react-navigation/native';

const PaypalIcon = require('../../assets/images/icons/paypal.png');
const CreditCardIcon = require('../../assets/images/icons/credit-card.png');
const ApplePayIcon = require('../../assets/images/icons/apple-pay.png');
const CardImage = require('../../assets/images/card.png');
const UserIcon = require('../../assets/images/icons/user-black.png');
const CreditCardSmallIcon = require('../../assets/images/icons/CreditCardSmall.png');
const CalendarIcon = require('../../assets/images/icons/calendar.png');
const LockIcon = require('../../assets/images/icons/lock.png');

const PaymentMethod = () => {
  const [isSave, setIsSave] = useState(true);
  const [active, setActive] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const navigation = useNavigation();

  const onChangeCardNumber = (val: any) => {
    const result = cc_format(val);
    setCardNumber(result);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Step step={3} />
        <View style={styles.mainContent}>
          <View style={styles.wrapTypePayment}>
            <TouchableOpacity
              style={[
                styles.itemBox,
                active === 1 ? styles.itemBoxActive : null,
              ]}
              onPress={() => setActive(1)}>
              <Image source={PaypalIcon} />
              <Text style={styles.textBox}>Paypal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemBox,
                active === 2 ? styles.itemBoxActive : null,
              ]}
              onPress={() => setActive(2)}>
              <Image source={CreditCardIcon} />
              <Text style={styles.textBox}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemBox,
                active === 3 ? styles.itemBoxActive : null,
              ]}
              onPress={() => setActive(3)}>
              <Image source={ApplePayIcon} />
              <Text style={styles.textBox}>Apple pay</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapImageCard}>
          <Image source={CardImage} style={styles.imageCard} />
        </View>
        <TextInputCom
          stylesCon={styles.input}
          placeholder="Name on the card"
          icon={UserIcon}
        />
        <TextInputCom
          stylesCon={styles.input}
          placeholder="Card number"
          icon={CreditCardSmallIcon}
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={onChangeCardNumber}
          maxLength={19}
        />
        <View style={styles.groupField}>
          <DatePicker
            stylesCon={[styles.input, styles.inputCus]}
            placeholder="Month / Year"
            icon={CalendarIcon}
            getValue={val => console.log(val)}
          />
          <TextInputCom
            stylesCon={[styles.input, styles.inputCus]}
            placeholder="CVV"
            icon={LockIcon}
            keyboardType="number-pad"
            maxLength={3}
          />
        </View>
        <View style={styles.wrapSaveAddress}>
          <Switch value={isSave} onValueChange={setIsSave} />
          <Text style={styles.saveAddress}>Save this address</Text>
        </View>
        <Button
          title={'Make a  payment'}
          style={styles.btn}
          onPress={() => navigation.navigate('OrderSuccess')}
        />
      </View>
    </ScrollView>
  );
};

export default PaymentMethod;
