import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes } from 'src/store/actions';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import { MESSAGES } from 'src/config';
import { Colors } from 'src/styles';
import styles from './styles';

class HomeScreen extends Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: MESSAGES.TITLE,
      headerRight:(
        <NavRow>
          <NavButton
            icon={{
              type:'ionicon',
              name:'ios-search'
            }}
            containerStyle={styles.searchIconContainer}
            fontSize={26}
            onPress={() => console.log("Search note")}
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
        <Icon
          raised
          reverse
          type='ionicon'
          name='md-add'
          color={Colors.primary}
          containerStyle={styles.addIconContainer}
          onPress={() => this.props.navigation.navigate("AddNote")} 
        />
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