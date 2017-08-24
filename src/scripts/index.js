/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-24 16:50:23
 * @Description: Description
 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class Index extends Component {
  render(){
    return(
      <Router>
        <div>
          <h1>Welcome to use react-webpack-tmpl</h1>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index /> , document.querySelector('#app'));
