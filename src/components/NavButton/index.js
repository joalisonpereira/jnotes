import React, { Component } from 'react';
import { View,Text,TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const NavButton = ({icon,onPress,fontSize=29}) => (
	<TouchableWithoutFeedback onPress={onPress}>
	  	<View style={styles.container}>
	  		<Icon
	  			type={icon.type}
	  			name={icon.name}
	  			color="#FFF"
	  			iconStyle={{fontSize}}
	  		/>
	  	</View>
	</TouchableWithoutFeedback>
);

export default NavButton;