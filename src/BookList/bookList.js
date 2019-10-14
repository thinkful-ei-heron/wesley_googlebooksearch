import React, { Component } from 'react'
import BookItem from './bookItem'
import App from '../App';


// Map over store results and render a 'book item for each result'

export class BookList extends Component {
  render() {
    //console.log(this.props.books);

    return (
      <div>
        <h4>Search Results</h4>
        {console.log(this.props)}
        {/* const books;
        books = this.props.books.map(book => {
          <BookItem 
          title={this.book.title}
          price={this.book.price}
          author={this.book.authors}
          description={this.book.description}
          imgUrl={this.book.img}
        />
        }) */}
      </div>
    )
  }
}

export default BookList;
