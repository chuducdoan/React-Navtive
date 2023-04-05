import {Pressable, Text} from 'react-native';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title?: any;
  onPress?: any;
}

const Button = (props: Props) => {
  const {title, onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={['#AEDC81', '#6CC51D']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
