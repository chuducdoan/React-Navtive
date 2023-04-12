/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 17,
    backgroundColor: 'transparent',
  },
  productWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  productItem: {
    width: '47%',
    marginBottom: 20,
  },
});
