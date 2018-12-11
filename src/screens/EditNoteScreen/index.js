import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';

import { editNote } from 'src/store/actions';
import { getDate } from 'src/helpers';
import { NavRow, NavButton, ColorPallet, ConfirmDialog, PasswordDialog } from 'src/components';
import { MESSAGES, getColor } from 'src/config';
import styles from './styles';

class EditNoteScreen extends Component {
  state = {
    note:{
      ...this.props.navigation.state.params.note,
      date: getDate()
    },
    palletActive: false,
    dialogActive: false
  };

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return ({
       title : MESSAGES.EDIT_NOTE,
       headerRight:(
        <NavRow>
          <NavButton
            icon={{type:'ionicon',name:'md-color-palette'}}
            onPress={() => params.handlerPallet()}
            containerStyle={{marginTop:1.5}}
          />
          <NavButton
            icon={{
              type:'ionicon',
              name: params.isLock ? 'ios-lock' : 'ios-unlock'
            }}
            containerStyle={{paddingHorizontal:18}}
            onPress={() => params.handlerDialog()}
          />
          <NavButton
            icon={{type:'ionicon',name:'ios-folder'}}
            fontSize={26}
            containerStyle={{marginTop:1.5}}
            onPress={() => params.onEdit()}
          />
        </NavRow>
       )
    })
  };

  componentDidMount(){
    const { navigation } = this.props;
    navigation.setParams({
      handlerPallet: this._handlerPallet,
      handlerDialog: this._handlerDialog,
      onEdit: this._onEdit,
      isLock: this.state.note.password && true
    });
  }

  _handlerPallet = () => {
    this.setState({
      palletActive: !this.state.palletActive
    });
  };

  _handlerDialog = () => {
    this.setState({
      dialogActive: !this.state.dialogActive      
    });
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
        color,
      },
      palletActive: false
    });
  }

  _onEdit = () => {
    const { note } = this.state;
    if(note.title.length < 1){
      return Toast.show(MESSAGES.EMPTY_TITLE);
    }
    if(note.text.length < 1){
      return Toast.show(MESSAGES.EMPTY_TEXT);
    }
    this.props.editNote(note);
    this.props.navigation.navigate("Home");
  };

  _onSetPassword(password){
    const { note } = this.state;
    this.setState({
      note:{
        ...note,
        password
      },
      dialogActive: false
    });
    this.props.navigation.setParams({
      isLock: true
    });
  }

  _onRemovePassword(){
    this.setState({
      note:{
        ...this.state.note,
        password: ''
      },
      dialogActive: false
    });
    this.props.navigation.setParams({
      isLock: false
    });
  }

  render() {
    const { note } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={note.title}
          style={[styles.titleInput,{borderBottomColor:getColor(note.color)}]}
          placeholder="Editar Nota"
          placeholderTextColor={"#333"}
          underlineColorAndroid={"transparent"}
          onChangeText={text => this._handlerChange('title',text)}  
          autoFocus
        />
        <TextInput
          value={note.text}
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
        {
          note.password ?
            <ConfirmDialog
              active={this.state.dialogActive}
              onCancel={() => this._handlerDialog()}
              onConfirm={() => this._onRemovePassword()}
              toRemove={false}
            />
          :
            <PasswordDialog
              active={this.state.dialogActive}
              onCancel={() => this._handlerDialog()}
              onSubmit={text => this._onSetPassword(text)}
              block={true}
            />
        }
      </View>
    );
  }
}

const mapDispatchToProps = ({
  editNote
});

export default connect(null,mapDispatchToProps)(EditNoteScreen);