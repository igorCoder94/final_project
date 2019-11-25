import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import './index.css';
import App from './components/App/App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import combineReducers from './reducers/index';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));



