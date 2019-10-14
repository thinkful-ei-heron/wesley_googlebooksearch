// https://github.com/thinkful-ei-heron/wesley_googlebooksearch.git

import React, { Component } from 'react'

import './App.css';
import SearchBar from './SearchBar/searchBar';
import BookList from './BookList/bookList';

export class App extends Component {
  state ={
    results: ['test']
  }


// function to fetch books from the api and push to state. (array of objects)

// function to create a fetch request depending on the state of filterPrintType
// function to create a fetch request depending on the state of filterBookType

// Handle state change of PrintType
// Handle state Change of bookType


 render(){
   return (
    <div className="App">
      <h1>Google Book Search</h1>
      <SearchBar 
        books={this.state.results}
      />
      <BookList 
        books={this.state.results}
      />
    </div>
  );
 }
}

export default App;
