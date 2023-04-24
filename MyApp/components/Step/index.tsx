/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';

interface Props {
  step: number;
}

const CheckIcon = require('../../assets/images/icons/check.png');

const Step = (props: Props) => {
  const {step} = props;
  console.log(step);

  return (
    <View style={styles.container}>
      <View style={styles.wrapStep}>
        <View style={[styles.itemStep, styles.mr86]}>
          <View
            style={[
              styles.step,
              step >= 1 ? styles.stepActive : styles.stepNormal,
            ]}>
            {step > 1 ? (
              <Image source={CheckIcon} />
            ) : (
              <Text
                style={[
                  styles.numberStep,
                  step >= 1 ? styles.numberActive : styles.numberNormal,
                ]}>
                1
              </Text>
            )}

            <View
              style={[
                styles.line,
                step >= 1 ? styles.lineActive : styles.lineNormal,
              ]}></View>
          </View>
          <Text style={styles.textStep}>DELIVERY</Text>
        </View>
        <View style={[styles.itemStep, styles.mr86]}>
          <View
            style={[
              styles.step,
              step >= 2 ? styles.stepActive : styles.stepNormal,
            ]}>
            {step > 2 ? (
              <Image source={CheckIcon} />
            ) : (
              <Text
                style={[
                  styles.numberStep,
                  step >= 2 ? styles.numberActive : styles.numberNormal,
                ]}>
                2
              </Text>
            )}
            <View
              style={[
                styles.line,
                step >= 2 ? styles.lineActive : styles.lineNormal,
              ]}></View>
          </View>
          <Text style={styles.textStep}>ADDRESS</Text>
        </View>
        <View style={[styles.itemStep]}>
          <View
            style={[
              styles.step,
              step >= 3 ? styles.stepActive : styles.stepNormal,
            ]}>
            {step > 3 ? (
              <Image source={CheckIcon} />
            ) : (
              <Text
                style={[
                  styles.numberStep,
                  step >= 3 ? styles.numberActive : styles.numberNormal,
                ]}>
                3
              </Text>
            )}
          </View>
          <Text style={styles.textStep}>PAYMENT</Text>
        </View>
      </View>
    </View>
  );
};

export default Step;
