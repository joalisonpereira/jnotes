import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { removeNote } from 'src/store/actions';

import { NavRow, NavButton, ConfirmDialog } from 'src/components';
import { MESSAGES, getColor } from 'src/config';
import styles from './styles';

class ReadNoteScreen extends Component {
  
  state = {
  	note: this.props.navigation.state.params.note,
    dialogActive: false
  };

  static navigationOptions = ({navigation}) => {
   const { params:{handlerDialog,note} } = navigation.state;
	 return ({
     title : note.title,
     headerRight:(
      <NavRow>
        <NavButton
          icon={{
            type:'font-awesome',
            name:'pencil-square-o'
          }}
          onPress={() => navigation.navigate("EditNote",{note})}
          containerStyle={{paddingTop:4,paddingHorizontal:18}}
          fontSize={27}
        />
        <NavButton
          icon={{
            type:'font-awesome',
            name:'trash'
          }}
          onPress={() => handlerDialog()}
        />
      </NavRow>
     )
   })
  };

  componentDidMount(){
    const { navigation } = this.props;
    navigation.setParams({
      handlerDialog: this._handlerDialog
    });
  }

  _handlerDialog = () => {
    this.setState({
      dialogActive: !this.state.dialogActive      
    });
  };

  _onConfirmDialog(){
    const { navigation, removeNote } = this.props;
    removeNote(this.state.note);
    navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
    			value={this.state.note.title}
    			style={[styles.titleInput,{borderBottomColor:getColor(this.state.note.color)}]}
    			underlineColorAndroid={"transparent"}
          editable={false}
      	/>
      	<TextInput
      		value={this.state.note.text}
      		style={styles.textInput}
      		textAlignVertical="top"
    			underlineColorAndroid={"transparent"}
    			multiline
          editable={false}
          scrollEnabled={true}
      	/>
        <ConfirmDialog
          active={this.state.dialogActive}
          onCancel={() => this._handlerDialog()}
          onConfirm={() => this._onConfirmDialog()}
        />
      </View>
    );
  }
}

const mapDispatchToProps = ({
  removeNote
});

export default connect(null,mapDispatchToProps)(ReadNoteScreen);