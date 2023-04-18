/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Button, Select, Step, Switch, TextInputCom} from '../../components';
import {styles} from './style';

const UserIcon = require('../../assets/images/icons/user-black.png');
const MailIcon = require('../../assets/images/icons/mail.png');
const TelephoneIcon = require('../../assets/images/icons/telephone.png');
const AddressIcon = require('../../assets/images/icons/address.png');
const ZipcodeIcon = require('../../assets/images/icons/zip-code.png');
const CityIcon = require('../../assets/images/icons/city.png');
const CountryIcon = require('../../assets/images/icons/country.png');

const ShippingAddress = () => {
  const [isSave, setIsSave] = useState(true);

  return (
    <ScrollView style={{backgroundColor: 'red'}}>
      <View style={styles.container}>
        <Step step={2} />
        <View style={styles.wrapDelivery}>
          <TextInputCom
            stylesCon={styles.input}
            placeholder="Name"
            icon={UserIcon}
          />
          <TextInputCom
            stylesCon={styles.input}
            placeholder="Email address"
            icon={MailIcon}
          />
          <TextInputCom
            stylesCon={styles.input}
            placeholder="Phone number"
            icon={TelephoneIcon}
          />
          <TextInputCom
            stylesCon={styles.input}
            placeholder="Address"
            icon={AddressIcon}
          />
          <TextInputCom
            stylesCon={styles.input}
            placeholder="Zip code"
            icon={ZipcodeIcon}
          />
          <TextInputCom
            stylesCon={styles.input}
            placeholder="City"
            icon={CityIcon}
          />
          <Select />
        </View>
        <View style={styles.wrapSaveAddress}>
          <Switch value={isSave} onValueChange={setIsSave} />
          <Text style={styles.saveAddress}>Save this address</Text>
        </View>
        <Button title={'Next'} style={styles.btn} />
      </View>
    </ScrollView>
  );
};

export default ShippingAddress;
