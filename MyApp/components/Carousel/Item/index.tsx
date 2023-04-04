import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './style';

interface Props {
  item?: any;
}

const Item = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.url} style={styles.bgImage} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default Item;
