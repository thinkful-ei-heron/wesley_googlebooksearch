import React from 'react';

import './App.css';
import SearchBar from './SearchBar/searchBar';
import BookList from './BookList/bookList';

function App() {
  return (
    <div className="App">
      <h1>Google Book Search</h1>
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
