/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    paddingTop: 22,
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingBottom: 39,
  },
  wrapDelivery: {
    marginTop: 42,
    flex: 1,
  },
  box: {
    backgroundColor: color.bgWhite,
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 22,
    width: '100%',
    marginBottom: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.bgWhite,
  },
  boxActive: {
    borderColor: color.primaryDark,
  },
  boxLeft: {
    width: '90%',
  },
  boxRight: {
    width: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
    marginBottom: 12,
  },
  desc: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight400,
    color: color.textGray,
  },
  price: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.primaryDark,
  },
});
