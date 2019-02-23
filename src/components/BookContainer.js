import React, { Component } from 'react';
import Book from './Book'
import { connect } from 'react-redux'

class BookContainer extends Component {

  // state = {
  //   bookList: [],
  // }

  // componentDidMount = (q) => {
  //   fetch(`http://localhost:3000/api/v1/books?q=${q}`)
  //     .then(res => res.json())
  //     .then(bookData => this.setState({bookList: bookData}))
  // }


render() {
  const {bookArray} = this.props
  const bookComponents = bookArray.map(bookObj => <Book key={bookObj.title} book={bookObj}/>)

    return (
      <div align="center"> <br/><br/>
        <ul>
          {bookComponents}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    bookArray: state.bookArray
  }
}

export default connect(mapStateToProps)(BookContainer)
