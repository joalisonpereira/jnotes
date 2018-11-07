'use strict';

import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const NavRow = ({children}) => (
	<View style={styles.container}>
		{children}
	</View>
);

export default NavRow;