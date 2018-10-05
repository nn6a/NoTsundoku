import {ADD_BOOK} from "./types";

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

export default {
    addBook
};
