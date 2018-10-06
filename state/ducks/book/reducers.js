import {ADD_BOOK, SELECT_BOOK} from "./types";

/* State Shape = {
*       selectedBookID: string
*       books: [{
*           id: string
*           title: string,
*           authors: array,
*           pageCount: number
*       }]
* }
* */

const initialState = {
    selectedBookID: '',
    books: []
};

function bookReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ADD_BOOK:
            const newBook = {
                id: payload.id,
                title: payload.title,
                authors: payload.authors,
                pageCount: payload.pageCount
            };
            return {
                ...state,
                books: [...state.books, newBook]
            };
        case SELECT_BOOK:
            return {
                ...state,
                selectedBookID: payload.id
            };
        default:
            return state;
    }
}

export default bookReducer;
