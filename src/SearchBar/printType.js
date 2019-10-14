import React, { Component } from 'react'

export class PrintType extends Component {
  render() {
    return (
      <div>
        <label>Print Type: </label>
        <select 
          type="selector" 
          name="printType" 
          value={this.props.PrintType} 
          onChange={(e) => {
            e.preventDefault();
            this.props.printFilter(e.target.value);
            console.log(this.props.PrintType)
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
