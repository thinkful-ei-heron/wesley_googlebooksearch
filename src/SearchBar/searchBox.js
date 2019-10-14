import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <label>Search:</label>
          <input 
            type="text"
            name="searchBox">
          </input>
          <button 
            type="submit"
            name="submitButton">Submit
            </button>
      </div>
    )
  }
}

export default SearchBox
