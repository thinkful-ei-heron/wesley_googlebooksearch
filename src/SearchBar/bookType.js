import React, { Component } from 'react'




export class BookType extends Component {
  render() {
    return (
      <div>
        <label>Book Type: </label>
          <select 
            type="selector" 
            name="bookType" 
            value="None" 
            placeholder="book type"
            onChange={(e) => {
              e.preventDefault();
              //console.log(e.target.value);
              this.props.bookFilter(e.target.value);
            }}
            >
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">free eBooks</option>
            <option value="full">full eBooks</option>
            <option value="paid-ebooks">paid eBooks</option>
            <option value="partial">partial eBooks</option>
          </select>
      </div>
    )
  }
}

export default BookType;
