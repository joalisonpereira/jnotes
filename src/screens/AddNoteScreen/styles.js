import { StyleSheet } from 'react-native';
import { Metrics,Fonts,Colors } from 'src/styles';

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
		fontSize: Fonts.title,
		color: Colors.text,
		backgroundColor: Colors.secundaryWhite
	},
	textInput:{
		flex:1,
		paddingTop: Metrics.doubleBaseMargin,
		paddingHorizontal:8,
		fontSize: Fonts.text,
		backgroundColor: '#FFF',
		color: Colors.text
	}
});

export default styles;