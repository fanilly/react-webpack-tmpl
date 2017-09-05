/**
 * @Author:      allenAugustine
 * @DateTime:    2017-09-05 16:04:41
 * @Description: Description
 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';

import Home from '../containers/home/index.jsx';
import Detail from '../containers/detail/index.jsx';

class Index extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index /> , document.querySelector('#app'));
