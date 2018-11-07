import { StyleSheet } from 'react-native';
import { Metrics,Fonts } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFF'
	},
	titleInput:{
		width:'100%',
		height:52,
		elevation:1,
		borderWidth:0,
		paddingHorizontal:8,
		fontSize: Fonts.title
	},
	textInput:{
		flex:1,
		paddingTop: Metrics.doubleBaseMargin,
		paddingHorizontal:8,
		fontSize: Fonts.text,
		backgroundColor:'#F0F0F0'
	}
});

export default styles;