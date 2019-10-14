import React, { Component } from 'react'
import SearchBox from'./searchBox';
import PrintType from './printType';
import BookType from './bookType';


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
    //console.log(e.target);
    //console.log(e.target.value);
    const data = new FormData(e.target);
    const searchTerm = data.get('searchBox');
    const printType = data.get('printType');
    const bookType = data.get('bookType');
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    // const fullSearchUrl = generateSearchUrl(url,data);
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
            volumeInf: items,
            price: items.saleInfo.retailPrice ? items.saleInfo.retailPrice.amount : "free",
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


// handleSubmit(e) {
//   e.preventDefault();
//   const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
//   const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(bookmark),
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
//     }
//   };
