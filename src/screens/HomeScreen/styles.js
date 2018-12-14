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
	addIconContainer:{
		position: 'absolute',
		right: Metrics.baseMargin,
		bottom: Metrics.doubleBaseMargin,
		elevation:5,
		width:55,
		height:55,
	},
	alternativeContainer:{
		flex: 1,
		alignItems: 'center',
		marginTop: 15
	},
	notFoundText:{
		fontSize: 15,
		color: Colors.text
	}
});

export default styles;