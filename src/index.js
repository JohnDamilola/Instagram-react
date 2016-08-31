import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, {history} from './store';

import App from './app.js';

import './styles/index2.css';
import './styles/bootstrap.css';
import './styles/Animate.css';
import './styles/materialdesignicons.min.css';
import './styles/font-awesome.css';
import './icon100x100.png';

import PhotoGrid from './components/photogrid.js';
import Single from './components/single.js';




// export default Main;
const root = document.getElementById('root');
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="single" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);
ReactDOM.render(router, root);
