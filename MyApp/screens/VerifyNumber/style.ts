/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.size25,
    fontWeight: fontWeight.wight600,
    color: color.textBlack,
    marginBottom: 13,
  },
  desc: {
    textAlign: 'center',
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    marginBottom: 67,
  },
  btn: {
    marginTop: 13,
    width: '100%',
    marginBottom: 17,
  },
  text: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight300,
    color: color.textBlack,
  },
  wrapInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '15%',
    backgroundColor: color.bgWhite,
    borderRadius: 5,
    paddingLeft: 22,
    height: 60,
    color: color.textBlack,
    fontSize: fontSize.size20,
    fontWeight: fontWeight.wight500,
  },
});
