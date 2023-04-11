/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: color.textBlack,
    fontSize: fontSize.size18,
    fontWeight: '600',
  },
});
