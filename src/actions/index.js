const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = (newBooks) => {
    return {
        type: 'BOOKS_REQUESTED',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    };
};

export {
    booksLoaded,
    booksRequested,
    booksError
};