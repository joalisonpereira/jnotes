import React from 'react';
import { ListItem } from 'react-native-elements';

import { getColor } from 'src/config';
import styles from './styles';

const NoteItem = ({item,onPress,onLongPress,leftIconOnPress}) => (
  <ListItem
    leftIcon={{
      type: 'font-awesome',
      name: 'circle-thin',
      color: getColor(item.color),
      style: styles.leftIcon
    }}
    title={item.title}
    subtitle={item.date}
    subtitleStyle={styles.subtitle}
    rightIcon={!item.password ? {} : {type:'ionicon',name:'ios-lock', style:styles.rightIcon}}
    onPress={onPress}
    onLongPress={onLongPress}
    leftIconOnPress={leftIconOnPress}
  />
);

export default NoteItem;