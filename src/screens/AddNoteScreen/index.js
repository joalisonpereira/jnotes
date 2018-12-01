import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import { MESSAGES } from 'src/config';
import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import ColorPallet from 'src/components/ColorPallet';

import styles from './styles';

class AddNoteScreen extends Component {
  state = {
     note:{
      title: '',
      text: '',
      color: 'red'
     }
  };

  static navigationOptions = {
     title : MESSAGES.NEW_NOTE,
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
          fontSize={26}
          onPress={() => console.log("Save note")}
          containerStyle={{marginTop:1.5}}
        />
      </NavRow>
     )
  };

  _handlerChange(label,value){
    this.setState({
      note:{
        ...this.state.note,
        [label]:value
      }
    });
  }

  _handlerChangeColor(color){
    const { note } = this.state;
    this.setState({
      note:{
        ...note,
        color
      }
    });
  }

  render() {
    const { note } = this.state;    
    return (
      <View style={styles.container}>
        <TextInput
          value={note.title}
          style={[styles.titleInput,note.color && {borderBottomColor:note.color}]}
          placeholder="Nova Nota"
          underlineColorAndroid={"transparent"}
          onChangeText={text => this._handlerChange('title',text)} 
        />
        <TextInput
          value={note.text}
          style={styles.textInput}
          textAlignVertical="top"
          underlineColorAndroid={"transparent"}
          onChangeText={text => this._handlerChange('text',text)}
          multiline
        />
        <ColorPallet action={color => this._handlerChangeColor(color)} />
      </View>
    );
  }
}

export default AddNoteScreen;