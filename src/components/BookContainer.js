import React, { Component } from 'react';
import Book from './Book'
import {Card} from 'semantic-ui-react'
import { connect } from 'react-redux'


class BookContainer extends Component {



render() {
  // console.log(this.props);
  const {bookArray} = this.props
  const bookComponents = bookArray.map(book => <Book key={book.previewLink} book={book} />)
    return (
      <div align="center"> <br/><br/>
      <h1>Book Container</h1>
        <Card.Group centered>
          {bookComponents}
        </Card.Group>
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
