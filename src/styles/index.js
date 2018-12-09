import { Platform,Dimensions } from 'react-native';

const Colors = {
	primary: '#D42434',
	text: '#333',
	secundaryWhite: '#F4F4FC',
	placeholder: '#777',
	error: '#EC0C1C'
};

const Fonts = {
	title: 17.5,
	text: 17
};

const Metrics = {
	baseMargin: 5,
	doubleBaseMargin: 10,
	baseRadius: 3,
	screenWidth: Dimensions.get('window').width,
	screenHeight: Dimensions.get('window').height,
	headerPadding: Platform.OS === 'ios' ? 20 : 0,
	titleInputHeight: 56,
	lineColorWidth: 3 
};

export { Colors, Fonts, Metrics };
