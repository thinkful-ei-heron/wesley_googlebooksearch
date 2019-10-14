import React, { Component } from 'react'
import BookList from './bookList';


// Generate book item.


export class BookItem extends Component {
  render() {
    
    return (
      console.log(this.props)
      // <div>
      //   <img src={this.props.img} alt='Book cover'/>
      //   <h4>{this.props.title}</h4>
      //   <h5>{this.props.authors}</h5>
      //   <h6>{this.props.price}</h6>
      //   <p>{this.props.description}</p>
      // </div>
    )
  }
}

export default BookItem;
