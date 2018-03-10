import { INITIATE_FETCH_DOG, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions/dog.js';

const initialState = {
  loading: null,
  error: null,
  data: null
};

export default function dogReducer(state = initialState, action) {
  if(action.type === INITIATE_FETCH_DOG) {
    return Object.assign({}, state, {
      loading: true 
    });
  } else if(action.type === FETCH_DOG_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null,
        data: action.data 
      });
  } else if(action.type === FETCH_DOG_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
  } else
      return state;

} 