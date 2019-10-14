import React, { Component } from 'react'


// Generate book item.


export class BookItem extends Component {
  render() {
    
    return (
      <div>
        <img src={this.props.imgUrl} alt=''/>
        <h4>{this.props.title}</h4>
        <h5>{this.props.authors}</h5>
        <h6>${this.props.price}</h6>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default BookItem;
