import  {REACT_APP_API_BASE_URL} from '../config.js';


export const INITIATE_FETCH_CAT = 'INITIATE_FETCH-CAT';
export const initiateFetchCat = (loading) => ({
  type: INITIATE_FETCH_CAT,
  loading: true
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (data) => ({
  type: FETCH_CAT_SUCCESS,
  error: false,
  loading: false,
  data: data 
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error,loading) => ({
  type: FETCH_CAT_ERROR,
  error: error,
  loading: false
});


//fetch a cat from the queue
export const fetchCat = () => dispatch => {
  console.log('Enter fetchCat');
  dispatch(initiateFetchCat());

  return fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    },
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
      return res.json();
  })
  .then(cat => {
    console.log(cat);
    dispatch(fetchCatSuccess(cat));
  })
  .catch(err => {
    dispatch(fetchCatError(err));
  })
}

export const adoptCat = () => dispatch => {
  console.log('Enter adoptCat');
  dispatch(initiateFetchCat());

  return fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json'
    },
  })
  .then(res => {
    if(!res.ok) {
      return Promise.rejext(res.statusText);
    }
      return res.json();
  })
  .then(success => {
    dispatch(fetchCat());
  })
  .catch(err => {
    dispatch(fetchCatError(err));
  })
}