import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import { MESSAGES } from 'src/config';
import styles from './styles';

class ReadNoteScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	note: this.props.navigation.state.params.note
    }
  }

  static navigationOptions = ({navigation}) => ({
	 title : 'navigation.state.params.note.titleasdsakjdhsajkdsahkdsahdsadsadsadadadsa',
	 headerRight:(
		<NavRow>
		  <NavButton
        icon={{
          type:'font-awesome',
          name:'pencil'
        }}
        onPress={() => navigation.navigate("EditNote",{note:navigation.state.params.note})}
        fontSize={27}
      />
      <NavButton
        icon={{
          type:'font-awesome',
          name:'trash'
        }}
        onPress={() => console.log("Delete note")}
      />
    </NavRow>
	 )
  });

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
    			value={this.state.note.title}
    			style={styles.titleInput}
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
      	/>
      </View>
    );
  }
}

export default ReadNoteScreen;