import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  content: {
    width: '100%',
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 19,
    marginBottom: 11,
  },
  text: {
    fontSize: fontSize.size10,
    fontWeight: fontWeight.wight500,
    color: color.textGray,
  },
});
