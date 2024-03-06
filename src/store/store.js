import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk';

import reducer from './reducer'

const improvedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducer, improvedComposer(applyMiddleware(thunk)))