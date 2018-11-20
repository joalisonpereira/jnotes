'use strict';

import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const NavRow = ({children,containerStyle}) => (
	<View style={[styles.container,containerStyle]}>
		{children}
	</View>
);

export default NavRow;