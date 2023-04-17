/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.size25,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
    marginBottom: 13,
  },
  desc: {
    textAlign: 'center',
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    maxWidth: 322,
    marginBottom: 44,
  },
  btn: {
    marginTop: 13,
    width: '100%',
  },
});
