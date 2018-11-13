import React, { Component } from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadNotes, resetNotes, filterNotes, searchNotes } from 'src/store/actions';

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
                onPress={() => params.resetNotes()}
              />
          }
        </NavRow>
      ),
    }
  };
  
  componentDidMount(){
    const { navigation,resetNotes } = this.props;
    navigation.setParams({
      resetNotes,
      handleSearchBar: this._handleSearchBar
    });
    
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this._handlerBackPress();
      return true;
    });

    this.props.loadNotes();
  }

  componentDidUpdate(prevProps){
    const { notes } = this.props;
    if(notes.filterData !== prevProps.notes.filterData){
      this.props.navigation.setParams({
        showHomeButton: notes.filterData ? true : false
      });
    }
  }
  
  componentWillUnmount() {
    this.backHandler.remove();
  }

  _handlerBackPress(){
    const { notes, resetNotes, navigation } = this.props;
    if(notes.filterData){
      return resetNotes();
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

    this.props.resetNotes();
  }

  _renderNote({item}){
    const { navigation } = this.props;
    return (
      <ListItem
        leftIcon={{
          type: 'font-awesome',
          name: 'circle-thin',
          color: item.color,
          style: styles.leftIcon
        }}
        leftIconOnPress={() => {
          if(!this.state.searchBar.active)
            this.props.filterNotes(item.color)
          else
            navigation.navigate('ReadNote',{note:item})
        }}
        title={item.title}
        subtitle={item.date}
        subtitleStyle={styles.subtitle}
        rightIcon={item.password ? {} : {type:'ionicon',name:'ios-lock', style:styles.rightIcon}}
        onPress={() => navigation.navigate('ReadNote',{note:item})}
        onLongPress={() => navigation.navigate('EditNote',{note:item})}
      />
    );
  }

  _getNotesData(){
    const {notes:{data,filterData,searchData,isLoading}} = this.props;
    if(filterData) return {data:filterData,isLoading};
    if(searchData) return {data:searchData,isLoading};
    return {data, isLoading};
  }

  render() {
    const { data,isLoading } = this._getNotesData();
    return(
      <View style={styles.container}>
        <SearchBar 
          onChangeText={text => this.props.searchNotes(text)} 
          onClose={() => this._handleSearchBar()} 
          active={this.state.searchBar.active}
        />
        {
          isLoading ?
            <Text>Carregando notas</Text>
          :
            data.length == 0 ?
              <Text>Nenhuma nota encontrada</Text>
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
  resetNotes,
  filterNotes,
  searchNotes
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);