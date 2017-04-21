import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './core/store';
import Hello from "./components/zoey";
import Hi from "./components/detail";
import TodoComponent from "./components/todolist";
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <aside className="menu">
              <p className="menu-label">General</p>
              <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page">Page</Link></li>
                <li><Link to="/todo">Todo</Link></li>
              </ul>
            </aside>
          </div>

          <div className="column">
            <Route exact path="/" component={Hello}/>
            <Route path="/page" component={Hi}/>
            <Route path="/todo" component={TodoComponent}/>
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

