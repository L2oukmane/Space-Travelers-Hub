import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
