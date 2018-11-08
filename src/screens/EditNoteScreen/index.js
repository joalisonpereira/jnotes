import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';

import styles from './styles';

class EditNoteScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	note: this.props.navigation.state.params.note
    }
  }

  static navigationOptions = {
	 title : 'Editar Nota',
	 headerRight:(
		<NavRow>
		  <NavButton
        icon={{
          type:'ionicon',
          name:'ios-lock'
        }}
        onPress={() => console.log("Block note")}
      />
      <NavButton
        icon={{
          type:'ionicon',
          name:'ios-folder'
        }}
        onPress={() => console.log("Save note")}
        fontSize={28}
      />
    </NavRow>
	 )
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
    			placeholder="Editar Nota"
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

export default EditNoteScreen;