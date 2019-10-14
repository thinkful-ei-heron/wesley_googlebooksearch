import React, { Component } from 'react'
import BookItem from './bookItem'

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
