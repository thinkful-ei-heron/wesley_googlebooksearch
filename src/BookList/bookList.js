import React, { Component } from 'react'
import BookItem from './bookItem'
import App from '../App';


// Map over store results and render a 'book item for each result'

export class BookList extends Component {

  render() {
    console.log(this.props.books);
    return (
      <div>
        <h4>Search Results</h4>
        <BookItem />
      </div>
    )
  }
}

export default BookList;
