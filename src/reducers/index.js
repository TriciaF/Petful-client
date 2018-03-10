import {combineReducers} from 'redux';
import catReducer from './cat-reducer.js';
import dogReducer from './dog-reducer.js';

const reducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});

export default reducer;