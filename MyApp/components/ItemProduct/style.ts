import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 234,
    backgroundColor: color.bgWhite,
    position: 'relative',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorite: {
    position: 'absolute',
    top: 9,
    right: 9,
  },
  image: {
    maxWidth: 130,
    maxHeight: 100,
  },
  price: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.primaryDark,
    marginTop: 3,
  },
  productName: {
    fontSize: fontSize.size15,
    fontWeight: '600',
    color: color.textBlack,
  },
  desc: {
    fontSize: fontSize.size12,
    fontWeight: '500',
    color: color.textGray,
  },
  sale: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 38,
    height: 18,
    backgroundColor: '#FEE4E4',
    color: '#F56262',
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  new: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 38,
    height: 18,
    backgroundColor: '#FDEFD5',
    color: '#E8AD41',
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottom: {
    height: 40,
    borderTopColor: color.border,
    borderTopWidth: 1,
  },
  wrapCart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCart: {
    fontSize: fontSize.size12,
    fontWeight: '500',
    color: color.textBlack,
    marginLeft: 9,
  },
});
