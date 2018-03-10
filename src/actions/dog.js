import {REACT_APP_API_BASE_URL} from '../config.js';

export const INITIATE_FETCH_DOG = 'INITIATE_FETCH-DOG';
export const initiateFetchDog = (loading) => ({
  type: INITIATE_FETCH_DOG,
  loading: true
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (data) => ({
  type: FETCH_DOG_SUCCESS,
  error: false,
  loading: false,
  data: data
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error,loading)=> ({
  type: FETCH_DOG_ERROR,
  error: error,
  loading: false
});

//fetch a dog from the queue
export const fetchDog = () => dispatch => {
  console.log('Enter fetchDog');
  dispatch(initiateFetchDog());

  return fetch(`${REACT_APP_API_BASE_URL}/dog`, {
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
  .then(dog => {
    console.log(dog);
    dispatch(fetchDogSuccess(dog));
  })
  .catch(err => {
    dispatch(fetchDogError(err));
  })
}

export const adoptDog = () => dispatch => {
  console.log('Enter adoptDog');
  dispatch(initiateFetchDog());

  return fetch(`${REACT_APP_API_BASE_URL}/dog`, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json'
    },
  })
  .then( res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
      return res.json();
  })
  .then(success => {
    dispatch(fetchDog());
  })
  .catch(err => {
    dispatch(fetchDogError(err));
  })
}