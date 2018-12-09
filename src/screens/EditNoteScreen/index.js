import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import ColorPallet from 'src/components/ColorPallet';

import { MESSAGES, getColor } from 'src/config';
import styles from './styles';

class EditNoteScreen extends Component {
  state = {
  	note: this.props.navigation.state.params.note,
    palletActive: false
  };

  static navigationOptions = ({navigation}) => ({
     title : MESSAGES.EDIT_NOTE,
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
      note:{
        ...note,
        color,
      },
      palletActive: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
    			value={this.state.note.title}
    			style={[styles.titleInput,{borderBottomColor:getColor(this.state.note.color)}]}
    			placeholder="Editar Nota"
    			underlineColorAndroid={"transparent"}
    			onChangeText={text => this._handlerChange('title',text)}	
          autoFocus
        />
        <TextInput
          value={this.state.note.text}
          style={[styles.textInput]}
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

export default EditNoteScreen;