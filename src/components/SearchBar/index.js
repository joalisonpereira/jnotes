import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity,Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import { Colors } from 'src/styles';
import styles from './styles';

class SearchBar extends Component{

  state = {
    animated: new Animated.Value(-200),
  };

  componentDidUpdate(prevProps) {
    if(prevProps.active !== this.props.active){
      this.setState(
        { active: !this.props.active },
        () => {
          Animated.spring(
            this.state.animated,
            { 
              toValue: this.props.active ? 0 : -200,
              useNativeDriver: true
            }
          ).start()
        }
      )
    }
  }

  render() {
    if(!this.props.active) return null;
    const {value,onChangeText,onClose} = this.props;
    return (
      <Animated.View style={[styles.container,{
        transform:[{
          translateY: this.state.animated
        }]
      }]}>
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
