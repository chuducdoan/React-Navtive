/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    paddingTop: 22,
    paddingHorizontal: 17,
    paddingBottom: 36,
  },
  mainContent: {
    flex: 1,
    width: '100%',
  },
  contentItem: {
    backgroundColor: color.bgWhite,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTop: {
    marginBottom: 19,
    paddingVertical: 20,
    paddingHorizontal: 19,
  },
  wrapImage: {
    width: 66,
    height: 66,
    backgroundColor: color.bgGray,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    position: 'relative',
  },
  wrapActive: {
    backgroundColor: '#EBFFD7',
  },
  wrapContent: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    marginRight: 14,
  },
  label: {
    fontSize: fontSize.size10,
    fontWeight: '400',
    color: color.textBlack,
    lineHeight: 15,
  },
  value: {
    fontSize: fontSize.size10,
    fontWeight: '600',
    color: color.textBlack,
    lineHeight: 15,
  },
  contentBottom: {
    backgroundColor: color.bgWhite,
    paddingLeft: 19,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: color.border,
    paddingVertical: 27,
  },
  cusItem: {
    marginBottom: 5,
  },
  line: {
    position: 'absolute',
    left: 33,
    width: 1,
    height: 37,
    zIndex: 0,
    backgroundColor: color.border,
    bottom: 66,
  },
  // lineAfter: {
  //   top: 66,
  // },
  // lineBefore: {
  //   bottom: 66,
  // },

  mainTitle: {
    fontSize: fontSize.size15,
    fontWeight: '600',
    color: color.textBlack,
    lineHeight: 22,
  },
  desc: {
    fontSize: fontSize.size10,
    fontWeight: '400',
    color: color.textGray,
    lineHeight: 15,
    marginBottom: 5,
  },
  btn: {
    width: '100%',
  },
});
