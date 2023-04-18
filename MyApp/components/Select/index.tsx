/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableHighlight, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {styles} from './style';

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  background?: any;
  last?: boolean;
  style?: any;
}

const CountryIcon = require('../../assets/images/icons/country.png');
const ArrowDownIcon = require('../../assets/images/icons/arrow-down.png');

const Select = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const onPress = () => {
    setVisible(true);
  };

  return (
    <>
      <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.icon}>
          <Image source={CountryIcon} />
        </View>
        <Text style={styles.text}>Country</Text>
        <Image source={ArrowDownIcon} />
      </Pressable>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{justifyContent: 'flex-end'}}>
          <View style={styles.contentModal}>
            <TouchableHighlight
              style={styles.record}
              onPress={() => setVisible(false)}>
              <Text>Viet Nam</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.record}>
              <Text>Korea</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.record}>
              <Text>Laos</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default Select;
