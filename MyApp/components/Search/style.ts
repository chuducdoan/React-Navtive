/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize} from '../../constant';
import {color} from './../../constant/index';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: color.bgLight,
    position: 'relative',
    paddingLeft: 21,
    paddingRight: 16,
    marginBottom: 10,
  },

  textInput: {
    fontSize: fontSize.size15,
    flex: 1,
    paddingLeft: 19,
    color: color.textGray,
  },
  icon: {
    position: 'absolute',
    top: 19,
    left: 33,
  },
});
