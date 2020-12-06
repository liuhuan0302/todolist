import {createStore, combineReducers, applyMiddleware} from 'redux';
import num from './num-redux';
import toDoList from './todolist-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  num,
  toDoList
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store;
