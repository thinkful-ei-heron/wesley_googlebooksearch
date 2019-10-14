import React, { Component } from 'react'
import BookItem from './bookItem'



// Map over store results and render a 'book item for each result'

export class BookList extends Component {
  render() {
    return (
      <div>
        <h4>Search Results</h4>
        <BookItem />
      </div>
    )
  }
}

export default BookList;
