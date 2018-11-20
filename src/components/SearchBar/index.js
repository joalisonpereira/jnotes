import React from 'react';
import { View,TextInput,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { Colors } from 'src/styles';
import styles from './styles';

const SearchBar = ({value,onChangeText,onClose,active=false}) => {
  if(!active) return null;
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value} 
        onChangeText={onChangeText} 
        placeholder="Pesquisar"
        placeholderTextColor={Colors.placeholder}
        underlineColorAndroid={"transparent"}
        autoFocus
      />
      <View style={styles.divider}/>
      <View style={styles.closeContainer}>
        <TouchableOpacity onPress={onClose}>
          <Icon
            type="ionicon"
            name="ios-close"
            iconStyle={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchBar;