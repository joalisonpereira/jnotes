import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Router,NavigationService } from 'src/routes';
import { store,persistor } from 'src/store';

const App = () => (
  <Provider store={store}>
  	<PersistGate loading={null} persistor={persistor}>
  		<Router
			ref={navigatorRef => {
	          NavigationService.setTopLevelNavigator(navigatorRef);
	        }}
	  	/>
  	</PersistGate>
  </Provider>
);

export default App;