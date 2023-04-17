/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
  },
  wrapContent: {
    paddingTop: 25,
    paddingHorizontal: 17,
    flex: 1,
  },
  item: {
    width: '100%',
    backgroundColor: color.bgWhite,
    marginBottom: 11,
    flexDirection: 'row',
    height: 100,
    // alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 16,
    position: 'relative',
  },
  image: {
    maxWidth: 92,
    maxHeight: 70,
    resizeMode: 'cover',
    marginRight: 17,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.primaryDark,
  },
  name: {
    fontSize: fontSize.size18,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
  },
  desc: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight400,
    color: color.textGray,
  },
  btnQuantity: {
    fontSize: fontSize.size30,
  },
  numberCart: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
  action: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  delete: {
    position: 'absolute',
    backgroundColor: '#EF574B',
    right: 0,
    top: 0,
    height: 100,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapCheckout: {
    paddingHorizontal: 17,
    paddingTop: 22,
    paddingBottom: 36,
    backgroundColor: color.bgWhite,
  },
  checkoutTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  textCheckoutTop: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
  total: {
    marginTop: 13,
    paddingTop: 10,
    marginBottom: 16,
    borderTopWidth: 1,
    borderTopColor: color.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
