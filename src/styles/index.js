import { Platform,Dimensions } from 'react-native';

const Colors = {
	'primary': '#000',
	'text': '#FFF'
};

const Fonts = {
	title: 17.5,
	text: 16.5
};

const Metrics = {
	baseMargin: 5,
	doubleBaseMargin: 10,
	baseRadius: 3,
	screenWidth: Dimensions.get('window').width
};

export { Colors, Fonts, Metrics };
