import { createStackNavigator } from 'react-navigation';

import navigationOptions from './navigationOptions';
import screens from './screens';

const Router = createStackNavigator(
	screens,{navigationOptions}
);

export default Router;