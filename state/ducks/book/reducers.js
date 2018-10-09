import {ADD_BOOK, SELECT_BOOK, SET_DEADLINE} from "./types";

/* State Shape = {
*       selectedBookID: string
*       books: [{
*           id: string
*           title: string,
*           authors: array,
*           pageCount: number,
*           deadline: date
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
        case SET_DEADLINE:
            return {
                ...state,
                books: state.books.map((book) => book.id === payload.id ? {
                    ...book,
                    deadline: payload.date
                } : book)
            };
        default:
            return state;
    }
}

export default bookReducer;
