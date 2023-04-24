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
    backgroundColor: color.bgWhite,
  },

  textValue: {
    color: color.textBlack,
    fontSize: fontSize.size15,
    fontWeight: '500',
    alignSelf: 'center',
    paddingLeft: 5,
  },
  textPlaceHolder: {
    color: color.textGray,
    fontSize: fontSize.size15,
    fontWeight: '500',
    alignSelf: 'center',
    paddingLeft: 5,
  },
  icon: {
    alignItems: 'center',
    width: 68,
    justifyContent: 'center',
  },
  iconBack: {
    alignItems: 'center',
    width: 70,
    justifyContent: 'center',
  },
});
