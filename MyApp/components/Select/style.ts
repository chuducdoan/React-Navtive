/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: color.bgWhite,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 25,
  },
  icon: {
    alignItems: 'center',
    width: 72,
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSize.size15,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    flex: 1,
  },
  containerModal: {
    height: 200,
  },
  contentModal: {
    width: '100%',
    backgroundColor: color.bgWhite,
    paddingHorizontal: 17,
    paddingTop: 20,
  },
  record: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: color.border,
    paddingVertical: 8,
  },
});
