/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Button} from '../../components';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const VerifyNumber = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.desc}>Enter your OTP code below</Text>
        <View style={styles.wrapInput}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
          />
        </View>
        <Button
          title={'Next'}
          style={styles.btn}
          onPress={() => navigation.navigate('Root')}
        />
        <Text style={styles.text}>Did’nt receive the code ?</Text>
        <Pressable>
          <Text style={[styles.text, {fontWeight: '500'}]}>
            Resend a new code
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default VerifyNumber;
