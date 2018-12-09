import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';

import { Metrics, Colors, Fonts } from 'src/styles';
 
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		height: Header.HEIGHT,
		backgroundColor: '#FFF',
		borderBottomWidth: 1,
		elevation: 1,
		borderColor: '#DCDCDC'
	},
	input:{
		flex: 1,
		paddingHorizontal: Metrics.doubleBaseMargin,
		fontSize: Fonts.text
	},
	divider:{
		width:40,
		height:'100%'
	},
	closeContainer:{
		position:'absolute',
		width: 50,
		right: 0,
		height: '100%',
		justifyContent: 'center',
		backgroundColor: '#FFF',
	},
	icon:{
		color: Colors.placeholder,
		fontSize: 37,
	}
});


export default styles;