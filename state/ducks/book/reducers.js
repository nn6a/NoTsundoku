import {ADD_BOOK} from "./types";

/* State Shape = {
*       books: [{
*           title: string,
*           authors: array,
*           pageCount: number
*       }]
* }
* */

const initialState = {
    books: []
};

function bookReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ADD_BOOK:
            const newBook = {
                title: payload.title,
                authors: payload.authors,
                pageCount: payload.pageCount
            };
            return {
                ...state,
                books: [...state.books, newBook]
            };
        default:
            return state;
    }
}

export default bookReducer;