import { Platform,Dimensions } from 'react-native';

const Colors = {
	'primary': '#D42434',
	'text': '#FFF'
};

const Fonts = {
	title: 17.5,
	text: 17
};

const Metrics = {
	baseMargin: 5,
	doubleBaseMargin: 10,
	baseRadius: 3,
	screenWidth: Dimensions.get('window').width
};

export { Colors, Fonts, Metrics };
