import React, { Component } from 'react'
import SearchBox from'./searchBox';
import PrintType from './printType';
import BookType from './bookType';

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form>
          <SearchBox />
            <PrintType />
            <BookType />
        </form>
      </div>
    )
  }
}

export default SearchBar;
