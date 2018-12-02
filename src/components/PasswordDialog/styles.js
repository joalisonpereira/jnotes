import { StyleSheet } from 'react-native';
import { Colors,Metrics } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		width: '90%',
	},
	innerContainer:{
		paddingBottom: Metrics.baseMargin,
		paddingHorizontal: Metrics.doubleBaseMargin
	},
	error:{
		paddingLeft: 3,
		color: Colors.error
	}
});

export default styles;