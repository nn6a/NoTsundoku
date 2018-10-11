import actions from './actions';

const searchRequested = actions.searchRequested;
const searchSucceeded = actions.searchSucceeded;
const searchFailed = actions.searchFailed;
const searchClear = actions.searchClear;

const searchBooks = (query) => async (dispatch) => {
    dispatch(searchRequested());
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + query);
        const json = await response.json();
        dispatch(searchSucceeded(json));
    } catch (e) {
        dispatch(searchFailed());
    }
};

export default {
    searchRequested,
    searchSucceeded,
    searchFailed,
    searchClear,
    searchBooks
}
