/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize, fontWeight} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 18,
    shadowColor: '#6CC51D',
    position: 'relative',
  },

  text: {
    color: color.bgWhite,
    fontSize: fontSize.size15,
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    top: 19,
    left: 33,
  },
});
