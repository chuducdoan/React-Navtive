/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 26,
    backgroundColor: color.bgWhite,
    paddingBottom: 29,
  },
  back: {
    position: 'absolute',
    left: 11,
    bottom: 34,
  },
  text: {
    color: color.textBlack,
    fontSize: fontSize.size18,
    fontWeight: '500',
  },
  filter: {
    position: 'absolute',
    right: 17,
    bottom: 32,
  },
});
