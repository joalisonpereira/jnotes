import React, { Component } from 'react';
import { View,Text,TextInput,Button } from 'react-native';

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
      color: 'red',
      password: ''
    },
    palletActive: true
  };

  static navigationOptions = ({navigation}) => ({
     title : MESSAGES.NEW_NOTE,
     headerRight:(
      <NavRow>
        <NavButton
          icon={{type:'ionicon',name:'md-color-palette'}}
          onPress={() => navigation.state.params.handlerPallet()}
          containerStyle={{marginTop:1.5}}
        />
        <NavButton
          icon={{type:'ionicon',name:'ios-lock'}}
          containerStyle={{paddingHorizontal:18}}
          onPress={() => console.log("Block note")}
        />
        <NavButton
          icon={{type:'ionicon',name:'ios-folder'}}
          fontSize={26}
          containerStyle={{marginTop:1.5}}
          onPress={() => console.log("Save note")}
        />
      </NavRow>
     )
  });

  componentDidMount(){
    const { navigation } = this.props;
    navigation.setParams({
      handlerPallet: this._handlerPallet
    });
  }

  _handlerPallet = () => {
    this.setState({
      palletActive:!this.state.palletActive
    });
  }

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
      note:{...note,color}
    });
    NavigationService.navigate("Home");
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
        <ColorPallet 
          action={color => this._handlerChangeColor(color)} 
          active={this.state.palletActive}
        />
      </View>
    );
  }
}

export default AddNoteScreen;