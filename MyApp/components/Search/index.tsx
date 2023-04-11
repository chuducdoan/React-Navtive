/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  onFilter?: any;
  onSearch?: any;
  onChange?: any;
}

const FilterIcon = require('../../assets/images/icons/filter.png');

const Search = (props: Props) => {
  const {onFilter, onSearch, onChange} = props;
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={20}
        color={'#868889'}
        onPress={onSearch}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search keywords.."
        onChange={onChange}
      />
      <Pressable onPress={onFilter}>
        <Image source={FilterIcon} />
      </Pressable>
    </View>
  );
};

export default Search;
