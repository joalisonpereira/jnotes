import React from 'react';
import { Provider } from 'react-redux';

import Router from 'src/routes';
import store from 'src/store';

const App = () => (
  <Provider store={store}>
  	<Router/>
  </Provider>
);

export default App;