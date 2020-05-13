import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Main />, document.getElementById('root'))


serviceWorker.register();
