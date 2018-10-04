import {SEARCH_REQUESTED, SEARCH_SUCCEEDED, SEARCH_FAILED} from './types'

function searchRequested() {
    return {
        type: SEARCH_REQUESTED
    }
}

function searchSucceeded (responseObject) {
    let {items} = responseObject;
    return {
        type: SEARCH_SUCCEEDED,
        payload: {items}
    }
}

function searchFailed () {
    return {
        type: SEARCH_FAILED
    }
}

export default {
    searchRequested,
    searchSucceeded,
    searchFailed
}

