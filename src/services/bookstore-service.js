export default class BookStoreService {

    data = [{
            id: '1',
            title: 'React & Redux',
            author: 'iliya y. doshech',
            price: 1200,
            coverImage: 'https://www.bookvoed.ru/files/1836/45/00/93/7.jpeg',

        },
        {
            id: '2',
            title: 'Node & Express',
            author: 'niki rodzh',
            price: 1250,
            coverImage: 'https://www.bookvoed.ru/files/1836/11/52/57/88.jpeg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error('something badhappenned'))
            }, 1000);
        });
    };
};