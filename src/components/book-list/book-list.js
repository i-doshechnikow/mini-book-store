import React, {Component} from 'react';
import BookListItem from '../book-list-item'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import WithBookSrtoreService from '../hoc';
import { fetchBooks, booksAddedToCart }  from '../../actions';
import compose from '../../utils';
import './book-list.css';
import withBookstoreService from '../hoc/with-bookstore-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} onAddedToCart={()=>onAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>        
    );
}
class BookListContainer extends Component {

    componentDidMount(){
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if(loading){
            return (
                <Spinner/>
            );
        }
        

        if(error){
            return (
                <ErrorIndicator/>
            );
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
               
    };
};


const mapStateToProps = ({ booklist: {books, loading, error}}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: booksAddedToCart
    }, dispatch);
};

export default compose(
        withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps)
        )(BookListContainer);
