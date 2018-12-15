import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage'; 

import rootReducer from './reducers';

const encryptor = createEncryptor({
  secretKey: 'FcjARGW5G3cwxdQSCoZFu31428T7zLda',
  onError: error => {}
});

const persistConfig = {
  key: 'root',
  transforms: [encryptor],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };