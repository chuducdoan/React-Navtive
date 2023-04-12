/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgWhite,
    position: 'relative',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom: 36,
    backgroundColor: color.bgLight,
  },
  favorite: {
    position: 'absolute',
    top: 33,
    right: 21,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price: {
    fontSize: fontSize.size18,
    fontWeight: fontWeight.wight600,
    color: color.textGreen,
  },
  name: {
    fontSize: fontSize.size20,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
  },
  unit: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    marginBottom: 9,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  numberStart: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textBlack,
  },
  countReview: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
  starReview: {
    flexDirection: 'row',
    marginHorizontal: 3,
  },
  itemStart: {
    marginHorizontal: 2,
  },
  desc: {
    flexDirection: 'row',
  },
  textMore: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
    marginLeft: 5,
    textAlignVertical: 'bottom',
    lineHeight: 19,
  },
  action: {
    flexDirection: 'row',
    backgroundColor: color.bgWhite,
    borderRadius: 5,
    height: 50,
    marginBottom: 13,
  },
  textCart: {
    flex: 1,
    height: '100%',
    paddingLeft: 17,
    textAlignVertical: 'center',
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
  btnQuantity: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSize.size30,
  },
  decrea: {
    borderRightWidth: 1,
    borderRightColor: color.border,
  },
  increa: {
    borderLeftWidth: 1,
    borderLeftColor: color.border,
  },
  numberCart: {
    width: 50,
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: fontSize.size18,
    fontWeight: fontWeight.wight500,
    color: color.textBlack,
  },
});
