import { INITIATE_FETCH_CAT, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from '../actions/cat.js';

const initialState = {
  loading: false,
  catError: null,
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
        catError: null,
        data: action.data 
      });
  } else if(action.type === FETCH_CAT_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        catError: action.catError
      });
  } else
      return state;
}