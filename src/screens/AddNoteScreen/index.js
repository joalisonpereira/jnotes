import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import styles from './styles';

class AddNoteScreen extends Component {
  state = {
	title:'',
	text:''
  };

  static navigationOptions = {
	title : 'Nova Nota'
  };

  _handleChange(label,value){
  	this.setState({
		...this.state,
		[label]:value
  	});
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
			value={this.state.title}
			style={styles.titleInput}
			placeholder="Nova Nota"
			underlineColorAndroid={"transparent"}
			onChangeText={text => this._handleChange('title',text)}	
      	/>
      	<TextInput
      		value={this.state.text}
      		style={styles.textInput}
      		textAlignVertical="top"
			underlineColorAndroid={"transparent"}
			onChangeText={text => this._handleChange('text',text)}
			multiline
      	/>
      </View>
    );
  }
}

export default AddNoteScreen;