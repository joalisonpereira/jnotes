import React from 'react';
import { Provider } from 'react-redux';

import { Router,NavigationService } from 'src/routes';
import store from 'src/store';

const App = () => (
  <Provider store={store}>
  	<Router
		ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
  	/>
  </Provider>
);

export default App;