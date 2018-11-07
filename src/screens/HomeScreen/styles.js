import {StyleSheet} from 'react-native';
import { Metrics } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFF',
	},
	listContainer:{
		marginTop:0,
	},
	subtitle:{
		fontSize:11,
		fontWeight:'normal',
		paddingTop:3
	},
	rightIcon:{
		marginRight: Metrics.baseMargin
	}
});

export default styles;