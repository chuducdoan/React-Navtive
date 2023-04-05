/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import {styles} from './style';

interface Props {
  item?: any;
}

const ItemSecondary = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <Image source={item.url} resizeMode="cover" />
      </View>
      <View style={styles.wrapText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.subText]}>{item.text}</Text>
      </View>
    </View>
  );
};

export default ItemSecondary;
