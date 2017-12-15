import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import thunk from 'redux-thunk';
import root from './reducer';
import websites from './websites/reducer';
import companies from './companies/reducer';

import { routeChanged } from './actions'; 

const initialState = { };

export const history = createHistory();

const middleware = [
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
];

if (window.devToolsExtension) middleware.push(window.devToolsExtension())

export const store = createStore(
    combineReducers({ root, websites, companies, router: routerReducer }),
    initialState,
    compose(...middleware)
);

history.listen((location, action) => {
    store.dispatch(routeChanged())
})

store.dispatch(routeChanged())

