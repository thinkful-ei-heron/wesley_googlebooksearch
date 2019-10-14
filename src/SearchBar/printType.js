import React, { Component } from 'react'

export class PrintType extends Component {
  render() {
    return (
      <div>
        <label>Print Type: </label>
        <select type="selector" name="printType" value="None" placeholder="select print type">
          <option value="All">option 01</option>
        </select>
      </div>
    )
  }
}

export default PrintType;
