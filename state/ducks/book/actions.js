import {ADD_BOOK} from "./types";

function addBook(bookData) {
    let {
        title,
        authors,
        pageCount
    } = bookData;

    return {
        type: ADD_BOOK,
        payload: {
            title,
            authors,
            pageCount
        }
    }
}

export default {
    addBook
};
