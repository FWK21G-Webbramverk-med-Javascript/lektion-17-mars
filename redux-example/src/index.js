import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import { Provider } from 'react-redux';

/**
 * Store - sparar ditt state
 * Reducer - Uppdaterar ditt state
 * Actions - Säger vad vi ska uppdatera
 * Dispatcher - Triggar en action
 */

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={ store }> { /** Gör vår store tillgänglig för vår React app */ }
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
