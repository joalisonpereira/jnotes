import { StyleSheet } from 'react-native';
import { Metrics } from 'src/styles';

const styles = StyleSheet.create({
	subtitle:{
		fontSize:11,
		fontWeight:'normal',
		paddingTop:3
	},
	rightIcon:{
		marginRight: Metrics.baseMargin
	},
	leftIcon:{
		fontSize:50,
		marginLeft:2,
		marginRight: 14,
	},
});

export default styles;