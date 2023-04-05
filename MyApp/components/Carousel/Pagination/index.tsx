/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Pressable, Text, View} from 'react-native';
import {styles} from './style';

interface Props {
  data: any;
  current: number;
  isBanner?: boolean;
}

const Pagination = ({data, current, isBanner}: Props) => {
  return (
    <View style={!isBanner ? styles.container : styles.containerBanner}>
      <Pressable>
        <Text style={styles.textPagination}>Skip</Text>
      </Pressable>
      <View style={styles.content}>
        {data.map((item: any, index: number) => (
          <View
            key={item.id}
            style={[styles.dot, current === index ? styles.active : styles.dot]}
          />
        ))}
      </View>
      <Pressable>
        <Text style={styles.textPagination}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Pagination;
