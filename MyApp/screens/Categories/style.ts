/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    paddingTop: 21,
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },
  text: {
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
  item: {
    backgroundColor: '#FFFBFB',
    width: '31%',
    marginBottom: 14,
    height: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
