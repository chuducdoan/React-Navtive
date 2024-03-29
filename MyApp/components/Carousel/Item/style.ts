/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../../constant';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },

  bgImage: {
    width: '100%',
    flex: 1,
    height: '100%',
    // resizeMode: 'cover',
  },
  wrapText: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    alignItems: 'center',

    paddingTop: 96,
  },
  title: {
    fontSize: fontSize.size30,
    textAlign: 'center',
    color: color.textBlack,
    fontWeight: fontWeight.wight700,
    marginBottom: 4,
    maxWidth: 240,
  },
  subImage: {
    marginTop: 13,
    marginBottom: 14,
  },
  subText: {
    color: color.textGray,
    fontSize: fontSize.size15,
    textAlign: 'center',
    maxWidth: 322,
  },
  mt29: {
    marginTop: 29,
  },
});
