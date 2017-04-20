import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './core/store';
import Home from "./components/zoey";
import About from "./components/detail";
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
const BasicRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

ReactDOM.render(
  <BasicRouter/>,
  document.getElementById('root')
);

