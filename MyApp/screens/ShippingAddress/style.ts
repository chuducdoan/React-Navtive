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
    marginTop: 52,
    flex: 1,
  },
  input: {
    width: '100%',
    marginBottom: 5,
  },
  btn: {
    width: '100%',
    marginTop: 69,
  },
  wrapSaveAddress: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 16,
  },
  saveAddress: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textBlack,
    marginLeft: 8,
  },
});
