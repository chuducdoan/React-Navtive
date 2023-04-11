/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Banner, Breadscrum, Search} from '../../components';
import {styles} from './style';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Search />
        <View style={{marginBottom: 20}}>
          <Banner />
        </View>
        <View style={{marginBottom: 17}}>
          <Breadscrum title="Categories" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
