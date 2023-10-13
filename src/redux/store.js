import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js

const store = createStore(
  rootReducer,
);

export default store;