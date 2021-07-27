const booksRequested = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
        payload: newBooks
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

export const booksAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

export const booksRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    };
};

export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    };
};

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
.then((data) => dispatch(booksLoaded(data)))
.catch((error)=>dispatch(booksError(error)));
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
.then((data) => dispatch(booksLoaded(data)))
.catch((error)=>dispatch(booksError(error)));
};

export {
    fetchBooks
};