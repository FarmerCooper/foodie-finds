import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

/**
 * Custom Hook that returns all of the store 
 */
export const useReduxStore = () => {
  return useSelector((store) => store);
}; 

const domNode = document.getElementById('react-root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
