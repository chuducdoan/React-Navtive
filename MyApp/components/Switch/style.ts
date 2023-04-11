/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    width: 29,
    height: 18,

    borderWidth: 1,
    borderRadius: 100,
    position: 'relative',
  },
  active: {
    borderColor: color.primaryDark,
    backgroundColor: color.primaryDark,
  },
  default: {
    borderColor: color.textGray,
  },

  around: {
    width: 16,
    height: 16,

    borderWidth: 1,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
  },
  roundActive: {
    borderColor: color.bgWhite,
    backgroundColor: color.bgWhite,
    right: 0,
  },
  roundDefault: {
    borderColor: color.textGray,
    left: 0,
  },
});
