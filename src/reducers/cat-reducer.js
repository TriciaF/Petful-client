import { INITIATE_FETCH_CAT, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from '../actions/cat.js';

const initialState = {
  loading: false,
  error: null,
  data: null
};


export default function catReducer(state = initialState, action) {
  if(action.type === INITIATE_FETCH_CAT) {
    return Object.assign({}, state, {
      loading: true 
    });
  } else if(action.type === FETCH_CAT_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null,
        data: action.data 
      });
  } else if(action.type === FETCH_CAT_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
  } else
      return state;
}