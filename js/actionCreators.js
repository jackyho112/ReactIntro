import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbId, omdbData) {
  return { type: ADD_OMDB_DATA, imdbId, omdbData }
}

// redux thunk
export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
