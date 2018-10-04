import {SEARCH_REQUESTED, SEARCH_SUCCEEDED, SEARCH_FAILED} from './types'

const initialState = {
    isFetching: false,
    responses: []
};

function searchReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SEARCH_REQUESTED:
            return {
                ...state,
                isFetching: true
            };
        case SEARCH_SUCCEEDED:
            return {
                ...state,
                isFetching: false,
                responses: payload.items
            };
        case SEARCH_FAILED:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

export default searchReducer;
