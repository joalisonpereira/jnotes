import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity,Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import { Colors } from 'src/styles';
import styles from './styles';

class SearchBar extends Component{

  state = {
    animated: new Animated.Value(-80),
  };

  componentDidUpdate(prevProps) {
    if(prevProps.active !== this.props.active){
      Animated.spring(
        this.state.animated,
        { 
          toValue: this.props.active ? 0 : -80,
          speed: 20,
          useNativeDriver: true
        }
      ).start()
    }
  }

  render() {
    const {value,onChangeText,onClose,active} = this.props;
    if(!active) return null;
    return (
      <Animated.View style={[styles.container,{
        transform:[{translateY: this.state.animated}
      ]}]}>
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
      </Animated.View>
    );
  }
}

export default SearchBar;
