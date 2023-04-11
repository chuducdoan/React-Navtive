/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  mainText: {
    fontSize: fontSize.size25,
    fontWeight: fontWeight.wight600,
    marginBottom: 2,
    color: color.textBlack,
  },
  description: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    marginBottom: 26,
    color: color.textGray,
    paddingRight: 62,
  },
  textInput: {
    marginBottom: 5,
  },
  wrapBtn: {
    marginTop: 12,
  },
});
