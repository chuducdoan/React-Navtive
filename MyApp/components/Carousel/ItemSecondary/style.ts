/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../../constant';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: color.bgWhite,
  },

  bgImage: {
    flex: 1.5,

    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  wrapText: {
    width: '100%',
    paddingHorizontal: 36,
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
  },
  title: {
    fontSize: fontSize.size25,
    textAlign: 'center',
    color: color.textBlack,
    fontWeight: fontWeight.wight700,
    marginBottom: 12,
    maxWidth: 240,
  },
  subText: {
    color: color.textGray,
    fontSize: fontSize.size15,
    textAlign: 'center',
    maxWidth: 322,
  },
});
