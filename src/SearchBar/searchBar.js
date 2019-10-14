import React, { Component } from 'react'
import SearchBox from'./searchBox';
import PrintType from './printType';
import BookType from './bookType';
import './searchBar.css';


export class SearchBar extends Component {

  state={
    printType:null,
    bookType: null
  }

  setPrintTypeFilter = (printFilter) =>{
    this.setState({
      printType: printFilter
    })
  }

  setBookTypeFilter = (bookFilter) => {
    this.setState({
      bookType: bookFilter
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const searchTerm = data.get('searchBox');
    //Need to add the Functionality to capture the value, set state to be that value and THEN fetch
    //const printType = data.get('printType');
    const printType = this.state.printType ? this.state.printType : data.get('printType');
    console.log(printType);
    //const bookType = data.get('bookType');
    const bookType = this.state.bookType ? this.state.bookType : data.get('bookType');
    console.log(bookType);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${url}${searchTerm}&printType=${printType}&filter=${bookType}`)
      .then(response => {
        if(!response.ok){
          throw new Error ('something went wrong');
        }
        return response.json();
      })
      .then(data => {
        const results = data.items.map(items => {
          return {
            price: items.saleInfo.retailPrice ? items.saleInfo.retailPrice.amount : "0.00",
            title: items.volumeInfo.title,
            description: items.volumeInfo.description || 'No description provided.',
            authors: items.volumeInfo.authors,
            img: items.volumeInfo.imageLinks.thumbnail
          }
        })
        console.log(results);
        this.props.pushResults(results);
      })

  }

  render() {
    return (
      <div className="searchbar">
          <form className="search_form" 
            onSubmit={e => this.handleSubmit(e)}>
          <SearchBox />
            <PrintType 
              printFilter={this.setPrintTypeFilter}
            />
            <BookType 
              bookFilter={this.setBookTypeFilter}
            />
        </form>
      </div>
    )
  }
}

export default SearchBar;