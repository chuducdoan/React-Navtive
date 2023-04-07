/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  wrapContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: color.bgLight,
    paddingTop: 31,
    paddingHorizontal: 16,
    paddingBottom: 39,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  textFooter: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight300,
    color: color.textGray,
    marginHorizontal: 5,
  },
  textLogin: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.textBlack,
  },
});
