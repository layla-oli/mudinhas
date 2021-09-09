import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}> {/*provider para poder acessar o store como se fosse uma variável global*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
