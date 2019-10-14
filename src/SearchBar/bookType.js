import React, { Component } from 'react'




export class BookType extends Component {
  render() {
    return (
      <div>
        <label>Book Type: </label>
          <select type="selector" value="None" placeholder="book type">
            <option value="placeholder">option 01</option>
          </select>
      </div>
    )
  }
}

export default BookType;
