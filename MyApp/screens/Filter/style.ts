/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    paddingTop: 21,
    paddingBottom: 36,
  },
  content: {
    backgroundColor: color.bgWhite,
    width: '100%',
  },
  contentTop: {
    paddingHorizontal: 17,
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  contentCenter: {
    paddingHorizontal: 17,
    paddingTop: 19,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  contentBottom: {
    paddingHorizontal: 17,
    paddingTop: 5,
    paddingBottom: 10,
  },
  label: {
    fontSize: fontSize.size15,
    fontWeight: '600',
    color: color.textBlack,
    marginBottom: 15,
  },
  groupField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 45,
    backgroundColor: color.bgLight,
    borderRadius: 5,
    paddingHorizontal: 16,
    width: '49%',
  },
  wrapRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.bgLight,
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  wrapStar: {
    flexDirection: 'row',
  },
  itemStart: {
    marginRight: 5,
  },
  textRating: {
    fontSize: fontSize.size12,
    fontWeight: '500',
    color: color.textGray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  textOther: {
    flex: 1,
  },
  imgFirst: {
    marginRight: 22,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  btn: {
    width: '100%',
  },
});
