import { createStackNavigator } from 'react-navigation';

import NavigationService from './NavigationService';
import navigationOptions from './navigationOptions';
import screens from './screens';

const Router = createStackNavigator(
	screens,{navigationOptions}
);

export { Router,NavigationService };