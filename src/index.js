import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './scenes/App';
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
