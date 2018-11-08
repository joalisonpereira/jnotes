import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import { MESSAGES } from 'src/config';
import styles from './styles';

class AddNoteScreen extends Component {
  state = {
  	 note:{
      title:'',
      text:''
     }
  };

  static navigationOptions = {
	   title : MESSAGES.NEW_NOTE
  };

  _handleChange(label,value){
  	this.setState({
  		note:{
        ...this.state.note,
        [label]:value
      }
  	});
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
    			value={this.state.note.title}
    			style={styles.titleInput}
    			placeholder="Nova Nota"
    			underlineColorAndroid={"transparent"}
    			onChangeText={text => this._handleChange('title',text)}	
      	/>
      	<TextInput
      		value={this.state.note.text}
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