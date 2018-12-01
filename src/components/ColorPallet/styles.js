import { StyleSheet } from 'react-native';
import { Metrics } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: Metrics.baseMargin,
		backgroundColor: '#FFF',
	},
	disable:{
		position: 'absolute',
		left:0,
		bottom:0,
		right:0,
	},
	item:{
		width: 43,
		height: 43,
		borderWidth:4,
		marginBottom: Metrics.doubleBaseMargin,
		borderRadius: 50,
	}
});

export default styles;