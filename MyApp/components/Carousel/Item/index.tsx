/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import {styles} from './style';

interface Props {
  item?: any;
}

const Item = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.url} resizeMode="cover" style={styles.bgImage} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{item.title}</Text>
        {item?.subImg && <Image source={item.subImg} />}
        <Text
          style={[styles.subText, !item.subImg ? styles.mt29 : styles.subText]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default Item;
