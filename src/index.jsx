import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import './style/public.css'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
