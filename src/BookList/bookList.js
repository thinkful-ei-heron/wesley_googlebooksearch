import React, { Component } from 'react'
import BookItem from './bookItem'
import App from '../App';


// Map over store results and render a 'book item for each result'
export class BookList extends Component {
 
  render() {
    const bookResults = this.props.books;
    //console.log(this.props.books);
    return (
      <div>
        <h4>Search Results</h4>  
          {bookResults.map(result => {
            if(bookResults === false){
              return(<div></div>)
            } else {
            return (
              <BookItem 
                title={result.title}
                key={Math.random()}
                price={result.price}
                author={result.authors}
                description={result.description}
                imgUrl={result.img}
            />
          )
            }
          })} 
      </div>
      )
    }
}

export default BookList;




