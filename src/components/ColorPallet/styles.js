import { StyleSheet } from 'react-native';
import { Metrics } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: Metrics.baseMargin
	},
	item:{
		width: 45,
		height: 45,
		borderWidth:4,
		marginBottom: Metrics.doubleBaseMargin,
		borderRadius: 50
	}
});

export default styles;