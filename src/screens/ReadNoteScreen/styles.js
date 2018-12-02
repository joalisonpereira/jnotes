import { StyleSheet } from 'react-native';
import { Metrics,Fonts,Colors } from 'src/styles';

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFF'
	},
	titleInput:{
		width:'100%',
		height: Metrics.titleInputHeight,
		paddingHorizontal:9,
		fontSize: Fonts.title,
		color: Colors.text,
		backgroundColor: Colors.secundaryWhite,
		borderColor: Colors.secundaryWhite,
		borderWidth: Metrics.lineColorWidth,
		elevation: 2
	},
	textInput:{
		flex:1,
		paddingTop: Metrics.doubleBaseMargin,
		paddingHorizontal:9,
		fontSize: Fonts.text,
		backgroundColor: '#FFF',
		color: Colors.text,
		borderBottomWidth: Metrics.baseMargin
	},
});

export default styles;