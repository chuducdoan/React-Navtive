/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Image, View, Text, Pressable, Platform} from 'react-native';
import {styles} from './style';
const EyeIcon = require('../../assets/images/icons/eye.png');
const CloseEyeIcon = require('../../assets/images/icons/closeEye.png');

interface Props {
  title?: any;
  onPress?: any;
  icon?: any;
  placeholder?: string;
  value?: any;
  stylesCon?: any;
  getValue?: any;
}

const DatePicker = (props: Props) => {
  const {icon, placeholder, stylesCon, getValue} = props;

  const [date, setDate] = useState<any>(new Date());
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState<any>(null);
  const [place, setPlace] = useState<any>(placeholder);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setIsShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setValue(fDate);
    setPlace(null);
    getValue?.(currentDate);
  };

  return (
    <Pressable
      style={[styles.container, stylesCon]}
      onPress={() => setIsShow(true)}>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
      {place && <Text style={styles.textPlaceHolder}>{place}</Text>}
      {!place && <Text style={styles.textValue}>{value}</Text>}
      {isShow && (
        <DateTimePicker
          testID="dateTimePicker"
          display="default"
          mode="date"
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Pressable>
  );
};

export default DatePicker;
