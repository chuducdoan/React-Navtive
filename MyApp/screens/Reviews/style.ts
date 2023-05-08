/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgLight,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    paddingTop: 23,
    paddingBottom: 36,
  },
  content: {
    width: '100%',
  },
  box: {
    backgroundColor: color.bgWhite,
    paddingVertical: 20,
    paddingLeft: 17,
    paddingRight: 20,
    marginBottom: 14,
  },
  top: {
    paddingBottom: 16,
    borderBottomColor: color.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginRight: 12,
  },
  bottom: {
    paddingTop: 16,
  },
  wrapReview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starReview: {
    flexDirection: 'row',
    marginHorizontal: 3,
  },
  itemStart: {
    marginHorizontal: 2,
  },
});
