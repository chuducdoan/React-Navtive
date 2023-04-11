/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../../constant';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width,
    height: 283,
    position: 'relative',
    overflow: 'hidden',
  },

  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapText: {
    position: 'absolute',
    left: 44,
    bottom: 78,
  },
  title: {
    fontSize: fontSize.size18,
    textAlign: 'left',
    color: color.textBlack,
    fontWeight: fontWeight.wight600,
    marginBottom: 4,
    maxWidth: 139,
  },
});
