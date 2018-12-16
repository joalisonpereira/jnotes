import React, { Component } from 'react';
import { View, Text, FlatList, BackHandler, ActivityIndicator } from 'react-native';
import { List, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes, filterNotes, searchNotes } from 'src/store/actions';
import { NavRow, NavButton, SearchBar, NoteItem, PasswordDialog } from 'src/components';
import { MESSAGES } from 'src/config';
import { Colors } from 'src/styles';
import styles from './styles';

class HomeScreen extends Component {
  
  state = {
    searchBar: false,
    passwordDialog: {
      active: false,
      item: null,
      route: null
    }
  };

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    const header = params.searchBarStatus ? {header:null} : {};
    return {
      ...header,
      title: MESSAGES.TITLE,
      headerRight:(
        <NavRow>
          <NavButton
            icon={{type:'octoicon',name:'search'}}
            fontSize={28}
            containerStyle={styles.searchIconContainer}
            onPress={() => params.handlerSearchBar()}
          />
          {
            params.showHomeButton &&
              <NavButton
                icon={{type:'octoicon',name:'home'}}
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
      handlerSearchBar: this._handlerSearchBar
    });
    
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this._handlerBackPress();
      return true;
    });

    this.props.loadNotes();
  }

  componentDidUpdate(prevProps){
    const { notes } = this.props;
    if(notes.isFiltered !== prevProps.notes.isFiltered){
      this.props.navigation.setParams({
        showHomeButton: notes.isFiltered ? true : false
      });
    }
  }
  
  componentWillUnmount() {
    this.backHandler.remove();
  }

  _handlerBackPress(){
    const { notes, loadNotes, navigation } = this.props;
    if(this.state.searchBar){
      return this._handlerSearchBar();
    }
    if(notes.isFiltered){
      return loadNotes();
    }
    if(navigation.pop()){
      return;      
    }
    BackHandler.exitApp();
  }

  _handlerSearchBar = () => {
    const { searchBar } = this.state;
    this.setState({
      searchBar:!searchBar
    });
    this.props.navigation.setParams({
      searchBarStatus: !searchBar
    });
    this.props.loadNotes();
  }

  _renderNoteItem({item}){
    const { navigation:{navigate},filterNotes } = this.props;
    return (
      <NoteItem
        item={item}
        onPress={() => {
          if(!item.password)
            navigate('ReadNote',{note:item})
          else
            this.setState({passwordDialog:{
              active: true,
              route: 'ReadNote',
              item
            }})
        }}
        onLongPress={() => {
          if(!item.password)
            navigate('EditNote',{note:item})
          else
            this.setState({passwordDialog:{
              active: true,
              route: 'EditNote',
              item
            }})
        }}
        leftIconOnPress = {() => {
          if(!this.state.searchBar && this.props.notes.data.length > 1)
            filterNotes(item.color)
          else
            navigate('ReadNote',{note:item})
        }}
      />
    );
  }
  
  _onSubmitDialog(){
    const { passwordDialog } = this.state;
    const { item,route } = passwordDialog;
    this.setState({
      passwordDialog:{
        ...passwordDialog,
        active: false
      }
    });
    this.props.navigation.navigate(route,{note:item});
  }

  render() {
    const { dataToRender,isLoading } = this.props.notes;
    return(
      <View style={styles.container}>
        <SearchBar 
          active={this.state.searchBar}
          onChangeText={text => this.props.searchNotes(text)} 
          onClose={() => this._handlerSearchBar()} 
        />
        {
          isLoading ?
            <View style={styles.alternativeContainer}>
              <ActivityIndicator size="large" color="#F4DC44"/>
            </View>
          :
            dataToRender.length == 0 ?
              <View style={styles.alternativeContainer}>
                <Text style={styles.notFoundText}>
                  { MESSAGES.NOTES_NOT_FOUND }
                </Text>
              </View>
            :
              <List containerStyle={styles.listContainer}>
                <FlatList
                  data={dataToRender}
                  renderItem={item => this._renderNoteItem(item)}
                  keyExtractor={item => String(item.id)}
                />
              </List>
        }
        <PasswordDialog 
          active={this.state.passwordDialog.active}
          item={this.state.passwordDialog.item}
          onSubmit={() => this._onSubmitDialog()}
          onCancel={() => this.setState({
            passwordDialog: {
              active: false
            }
          })}
        />
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
  loadNotes, filterNotes, searchNotes 
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);