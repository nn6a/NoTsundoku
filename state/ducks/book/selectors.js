import {createSelector} from 'reselect';

const getBooks = (state) => state.bookState.books;
const getSelectedBookID = (state) => state.bookState.selectedBookID;

const getBookByID = createSelector(
    [getBooks, getSelectedBookID],
    (books, id) => {
        return books.reduce((matchedBook, book) => book.id === id ? book : matchedBook)
    }
);

export default {
    getBookByID
};
