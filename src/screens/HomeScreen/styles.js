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
	},
	searchIconContainer:{
		marginRight:4
	},
	addIconContainer:{
		position: 'absolute',
		right: Metrics.baseMargin,
		bottom: Metrics.doubleBaseMargin,
		elevation:5,
		width:56,
		height:56
	},
	leftIcon:{
		fontSize:50,
		marginLeft:2,
		marginRight: 14,
	}
});

export default styles;