import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './baseStore'
import registerServiceWorker from './registerServiceWorker'

export const colors = {
  primary: 'rgba(101, 126, 212, 1)',
  secondary: 'rgba(54, 38, 167, 1)',
  accent: 'rgba(255, 51, 31, 1)',
  dark: 'rgba(13, 1, 6, 1)',
  darkSecondary: 'rgba(13, 1, 6, 0.6)',
  disabled: 'rgba(13, 1, 6, 0.4)',
  light: 'rgba(251, 251, 255, 1)',
  lightSecondary: 'rgba(251, 251, 255, 0.8)'
}

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
