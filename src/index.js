import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import Counter from './App.js';
import './styles.css';

const store = createStore(reducer, applyMiddleware(createLogger(), thunk));
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById("root")
)