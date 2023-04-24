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
    paddingBottom: 36,
  },
  mainContent: {
    marginTop: 20,
    flex: 1,
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: 5,
  },

  wrapTypePayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemBox: {
    width: '30%',
    height: 102,
    backgroundColor: color.bgWhite,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.bgWhite,
  },
  itemBoxActive: {
    borderColor: color.primaryDark,
  },
  textBox: {
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
    marginTop: 16,
  },
  wrapImageCard: {
    width: '100%',
    marginVertical: 18,
  },
  imageCard: {
    width: '100%',
    borderRadius: 10,
  },
  groupField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputCus: {
    width: '49%',
  },

  wrapSaveAddress: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    paddingLeft: 16,
  },
  saveAddress: {
    fontSize: fontSize.size12,
    fontWeight: fontWeight.wight500,
    color: color.textBlack,
    marginLeft: 8,
  },
  btn: {
    width: '100%',
    marginTop: 26,
  },
});
