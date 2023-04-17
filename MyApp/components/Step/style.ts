/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {},
  wrapStep: {
    flexDirection: 'row',
  },
  itemStep: {
    alignItems: 'center',
  },
  mr86: {
    marginRight: 86,
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  stepNormal: {
    backgroundColor: color.bgWhite,
    borderWidth: 1,
    borderColor: color.border,
  },
  stepActive: {
    backgroundColor: color.primaryDark,
  },
  line: {
    position: 'absolute',
    top: 20,
    left: '100%',
    width: 92,
    height: 1,
  },
  lineActive: {
    backgroundColor: color.primaryDark,
  },
  lineNormal: {
    backgroundColor: color.border,
  },
  numberStep: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
  },
  numberNormal: {
    color: color.textGray,
  },
  numberActive: {
    color: color.bgWhite,
  },
  textStep: {
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    marginTop: 6,
  },
});
