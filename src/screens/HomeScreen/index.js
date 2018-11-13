import React, { Component } from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes,filterNotes,searchNotes } from 'src/store/actions';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import SearchBar from 'src/components/SearchBar';

import { MESSAGES } from 'src/config';
import { Colors } from 'src/styles';
import styles from './styles';

class HomeScreen extends Component {
  
  state = {
    searchBar:{
      active: false
    }
  };

  static navigationOptions = ({navigation:{state}}) => {
    const params = state.params ? state.params : {};
    const header = params.searchBarStatus ? {header:null} : {};
    return {
      ...header,
      title: MESSAGES.TITLE,
      headerRight:(
        <NavRow>
          <NavButton
            icon={{
              type:'octoicon',
              name:'search'
            }}
            fontSize={28}
            containerStyle={styles.searchIconContainer}
            onPress={() => params.handleSearchBar()}
          />
          {
            params.showHomeButton &&
              <NavButton
                icon={{
                  type:'octoicon',
                  name:'home'
                }}
                fontSize={28}
                onPress={() => params.loadNotes()}
              />
          }
        </NavRow>
      ),
    }
  };
  
  componentDidMount(){
    const { navigation,loadNotes } = this.props;
    navigation.setParams({
      loadNotes,
      handleSearchBar: this._handleSearchBar
    });
    
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this._handlerBackPress();
      return true;
    });
    loadNotes();
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentDidUpdate(prevProps){
    const { notes } = this.props;
    if(notes.isFiltered !== prevProps.notes.isFiltered){
      this.props.navigation.setParams({
        showHomeButton: notes.isFiltered
      });
    }
  }

  _handlerBackPress(){
    const { notes, loadNotes, navigation } = this.props;
    if(notes.isFiltered){
      return loadNotes();
    }
    if(navigation.pop()){
      return;      
    }
    if(this.state.searchBar.active){
      return this._handleSearchBar();
    }
    BackHandler.exitApp();
  }

  _handleSearchBar = () => {
    const { searchBar } = this.state;
    this.setState({
      searchBar:{
        ...searchBar,
        active: !searchBar.active
      }
    });
    this.props.navigation.setParams({
      searchBarStatus: !searchBar.active
    });

    if(searchBar.active && !this.props.notes.isFiltered)
      this.props.loadNotes();
  }

  _renderNote({item}){
    return (
      <ListItem
        leftIcon={{
          type: 'font-awesome',
          name: 'circle-thin',
          color: item.color,
          style: styles.leftIcon
        }}
        leftIconOnPress={() => this.props.filterNotes(item.color)}
        title={item.title}
        subtitle={item.date}
        subtitleStyle={styles.subtitle}
        rightIcon={item.password ? {} : {type:'ionicon',name:'ios-lock', style:styles.rightIcon}}
        onPress={() => this.props.navigation.navigate('ReadNote',{note:item})}
        onLongPress={() => this.props.navigation.navigate('EditNote',{note:item})}
      />
    );
  }

  render() {
    let {notes:{data}} = this.props;
    return(
      <View style={styles.container}>
        <SearchBar 
          onChangeText={text => this.props.searchNotes(text)} 
          onClose={() => this._handleSearchBar()} 
          active={this.state.searchBar.active}
        />
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
  loadNotes,
  filterNotes,
  searchNotes
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);