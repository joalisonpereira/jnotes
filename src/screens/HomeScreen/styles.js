import {StyleSheet} from 'react-native';
import { Metrics,Colors } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFF',
	},
	searchIconContainer:{
		marginTop:2
	},
	listContainer:{
		marginTop: 0,
		borderTopColor:'#FFF'
	},
	subtitle:{
		fontSize:11,
		fontWeight:'normal',
		paddingTop:3
	},
	rightIcon:{
		marginRight: Metrics.baseMargin
	},
	addIconContainer:{
		position: 'absolute',
		right: Metrics.baseMargin,
		bottom: Metrics.doubleBaseMargin,
		elevation:5,
		width:55,
		height:55,
	},
	leftIcon:{
		fontSize:50,
		marginLeft:2,
		marginRight: 14,
	},
	alternativeContainer:{
		flex: 1,
		alignItems: 'center',
		marginTop: 15
	},
	notFoundText:{
		fontSize: 17,
		color: Colors.text
	}
});

export default styles;