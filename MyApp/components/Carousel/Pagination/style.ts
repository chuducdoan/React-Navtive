/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../../constant';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 148,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  containerBanner: {
    position: 'absolute',
    bottom: 75,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 36,
  },

  content: {
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

  textPagination: {
    fontSize: fontSize.size15,
    color: color.textHighlight,
    fontWeight: fontWeight.wight500,
  },

  next: {
    color: color.primaryDark,
  },
});
