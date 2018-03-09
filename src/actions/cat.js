import { REACT_APP_API_BASE_URL} from './config.js';


export const INITIATE_FETCH_CAT = 'INITIATE_FETCH-CAT';
export const initiateFetchCat = () => ({
  type: INITIATE_FETCH_CAT,
  initiateFetch: true
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = () => ({
  type: FETCH_CAT_SUCCESS,
  error: false
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error: error
});

export const INITIATE_FETCH_DOG = 'INITIATE_FETCH-DOG';
export const initiateFetchDog = () => ({
  type: INITIATE_FETCH_DOG,
  initiateFetch: true
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = () => ({
  type: FETCH_DOG_SUCCESS,
  error: false
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error)=> ({
  type: FETCH_DOG_ERROR,
  error: error
});

//fetch a cat from the queue
export const fetchCat = () => dispatch => {
  console.log('Enter fetchCat');
  dispatch(initiateFetchCat());

  return fetch(`${REACT_APP_BASE_URL}/cat`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    },
  })
  .then(cat => {
    dispatch(fetchCatSuccess());
  })
  .catch(err => {
    dispatch(fetchCatError(err));
  })
}
