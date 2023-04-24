/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {styles} from './style';

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  background?: any;
  last?: boolean;
  style?: any;
  placeholder?: any;
  getValue?: any;
}

const CountryIcon = require('../../assets/images/icons/country.png');
const ArrowDownIcon = require('../../assets/images/icons/arrow-down.png');

const listCountry = [
  {
    label: 'Viet Nam',
    value: 'vietnam',
  },
  {
    label: 'Korea',
    value: 'Korea',
  },
  {
    label: 'Laos',
    value: 'laos',
  },
];

const Select = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  const {placeholder, getValue} = props;
  const [place, setPlace] = useState(placeholder);

  const onPress = () => {
    setVisible(true);
  };

  const handleOnPress = (item: any) => {
    setVisible(false);
    setActive(item.label);
    setPlace(null);
    getValue?.(item.value);
  };

  return (
    <>
      <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.icon}>
          <Image source={CountryIcon} />
        </View>
        <Text style={[styles.text, place ? null : styles.values]}>
          {place ?? active}
        </Text>
        <Image source={ArrowDownIcon} />
      </Pressable>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{justifyContent: 'flex-end'}}>
          <View style={styles.contentModal}>
            {listCountry.map((item: any, index: number) => (
              <TouchableOpacity
                style={[
                  styles.record,
                  listCountry.length - 1 === index ? styles.noBorder : null,
                ]}
                onPress={() => handleOnPress(item)}
                key={index}>
                <Text
                  style={[
                    styles.textItem,
                    active === item.label ? styles.active : null,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default Select;
