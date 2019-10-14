import React, { Component } from 'react'


export class SearchBox extends Component {
  render() {
    return (
      <div className="searchBox">
        <label>Search:</label>
          <input 
            type="text"
            name="searchBox"
            required>
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
