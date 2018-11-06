import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes,filterNotes } from 'src/store/actions';
import styles from './styles';

class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Notas'
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
        onPress={() => console.log(item)}
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
                renderItem={this._renderNote}
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
  loadNotes,
  filterNotes
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);