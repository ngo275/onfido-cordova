import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const start = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}

if (!!window.cordova) {
    document.addEventListener('deviceready', start, false)
} else {
	start()
}
