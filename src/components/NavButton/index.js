import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const NavButton = ({icon,onPress,containerStyle,fontSize=27}) => (
	<TouchableOpacity onPress={onPress}>
	  	<View style={[styles.container,containerStyle]}>
	  		<Icon
	  			type={icon.type}
	  			name={icon.name}
	  			color="#FFF"
	  			iconStyle={{fontSize}}
	  		/>
	  	</View>
	</TouchableOpacity>
);

export default NavButton;