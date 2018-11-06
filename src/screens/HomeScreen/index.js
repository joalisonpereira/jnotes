import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';

import { loadNotes,filterNotes } from 'src/store/actions';
import styles from './styles';

class HomeScreen extends Component {
  render() {
    return (
      <View>
      	<Text>HomeScreen</Text>
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