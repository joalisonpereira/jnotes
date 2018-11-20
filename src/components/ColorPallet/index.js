import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import SYSTEM_COLORS from 'src/config/systemColors';
import styles from './styles';

const ColorPallet = ({action}) => (
	<View style={styles.container}>
		{
			SYSTEM_COLORS.map(item => (
				<TouchableOpacity key={item.title} onPress={() => action(item.color)}>
					<View style={[styles.item,{borderColor:item.color}]}/>
				</TouchableOpacity>
			))
		}
	</View>
);

export default ColorPallet;