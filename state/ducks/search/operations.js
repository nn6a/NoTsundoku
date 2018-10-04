import actions from './actions';

const searchRequested = actions.searchRequested;
const searchSucceeded = actions.searchSucceeded;
const searchFailed = actions.searchFailed;

const searchBooks = (query) => async (dispatch) => {
    dispatch(searchRequested());
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + query).then((response) => {
            return response.json();
        });
        dispatch(searchSucceeded(response));
    } catch (e) {
        dispatch(searchFailed());
    }
};

export default {
    searchRequested,
    searchSucceeded,
    searchFailed,
    searchBooks
}
