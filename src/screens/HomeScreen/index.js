import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes } from 'src/store/actions';
import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import { MESSAGES } from 'src/config';
import styles from './styles';

class HomeScreen extends Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: MESSAGES.TITLE,
      headerRight:(
        <NavRow>
          <NavButton
            icon={{
              type:'font-awesome',
              name:'plus'
            }}
            onPress={() => navigation.navigate('AddNote')}
            fontSize={28}
          />
        </NavRow>
      ),
    }
  };

  componentDidMount(){
    this.props.loadNotes();
  }

  _renderNote({item}){
    return (
      <ListItem
        title={item.title}
        subtitle={item.date}
        subtitleStyle={styles.subtitle}
        rightIcon={
          item.password ? 
          {} : {type:'ionicon',name:'ios-lock',style:styles.rightIcon}
        }
        onPress={() => this.props.navigation.navigate('ReadNote',{note:item})}
        onLongPress={() => this.props.navigation.navigate('EditNote',{note:item})}
      />
    );
  }

  render() {
    let {notes:{data}} = this.props;
    return(
      <View style={styles.container}>
        {
          data.isLoading ?
            <Text>Carregando notas</Text>
          :
            <List containerStyle={styles.listContainer}>
              <FlatList
                data={data}
                renderItem={item => this._renderNote(item)}
                keyExtractor={item => String(item.id)}
              />
            </List>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  notes : state.notes
});

const mapDispatchToProps = {
  loadNotes
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);