import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [{
        id: '1',
        title: 'first',
        author: 'iliya'
    },
    {
        id: '2',
        title: 'nike',
        author: 'first too'
    }
];
    return (
    <BookList books={books} />
    );
};

export default HomePage;