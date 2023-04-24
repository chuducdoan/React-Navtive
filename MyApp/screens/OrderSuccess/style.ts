/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    paddingTop: 22,
    paddingHorizontal: 17,
    paddingBottom: 36,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    marginTop: 36,
    fontSize: fontSize.size20,
    fontWeight: '600',
    color: color.textBlack,
    maxWidth: 158,
    textAlign: 'center',
    lineHeight: 26,
  },
  subTitle: {
    marginTop: 15,
    fontSize: fontSize.size15,
    fontWeight: '500',
    color: color.textGray,
    maxWidth: 236,
    textAlign: 'center',
    lineHeight: 22,
  },
  btn: {
    width: '100%',
  },
});
