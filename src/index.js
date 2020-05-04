import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main'

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000);
console.log('Server is listening on http://localhost:5000');

ReactDOM.render(<Main />, document.getElementById('root'));
