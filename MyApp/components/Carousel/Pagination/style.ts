/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color} from '../../../constant';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 148,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: color.bgGray2,
    marginHorizontal: 3,
  },

  active: {
    backgroundColor: color.primaryDark,
  },
});
