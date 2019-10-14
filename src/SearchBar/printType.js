import React, { Component } from 'react'

export class PrintType extends Component {
  render() {
    return (
      <div>
        <label>Print Type: </label>
        <select 
          type="selector" 
          name="printType" 
          value="None" 
          onChange={(e) => {
            e.preventDefault();
            //console.log(e.target.value);
            this.props.printFilter(e.target.value);
          }}
          >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    )
  }
}

export default PrintType;
