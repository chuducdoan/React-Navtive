/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 5,
    height: 60,
    flexDirection: 'row',
  },

  textInput: {
    color: color.textBlack,
    fontSize: fontSize.size15,
    fontWeight: '500',
    height: '100%',
    flex: 1,
    paddingRight: 16,
  },
  icon: {
    alignItems: 'center',
    width: 72,
    justifyContent: 'center',
  },
  iconBack: {
    alignItems: 'center',
    width: 70,
    justifyContent: 'center',
  },
});
