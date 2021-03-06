import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './Books/Books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
