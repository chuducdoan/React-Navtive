/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  text: {
    color: color.bgWhite,
    fontSize: fontSize.size15,
    fontWeight: '600',
  },

  wrapBtnCard: {
    position: 'absolute',
    bottom: 23,
    right: 35,
    backgroundColor: color.bgWhite,
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCard: {
    width: 56,
    height: 56,
    backgroundColor: color.primaryDark,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
