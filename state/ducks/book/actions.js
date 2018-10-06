import {ADD_BOOK, SELECT_BOOK} from "./types";

function addBook(bookData) {
    let {
        id,
        title,
        authors,
        pageCount
    } = bookData;

    return {
        type: ADD_BOOK,
        payload: {
            id,
            title,
            authors,
            pageCount
        }
    }
}

function selectBook(id) {
    return {
        type: SELECT_BOOK,
        payload: {id}
    }
}


export default {
    addBook,
    selectBook
};
