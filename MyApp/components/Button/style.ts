import {StyleSheet} from 'react-native';
import {fontSize, fontWeight} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 10,
    shadowColor: 'rgba(108, 197, 29, 0.25)',
  },

  text: {
    color: color.bgWhite,
    fontSize: fontSize.size15,
    fontWeight: '600',
  },
});
