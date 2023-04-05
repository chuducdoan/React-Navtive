/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {styles} from './style';

interface Props {
  data: any;
  current: number;
}

const Pagination = ({data, current}: Props) => {
  return (
    <View style={styles.container}>
      {data.map((item: any, index: number) => (
        <View
          key={item.id}
          style={[styles.dot, current === index ? styles.active : styles.dot]}
        />
      ))}
    </View>
  );
};

export default Pagination;
