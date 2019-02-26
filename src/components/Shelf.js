import React, { Component } from 'react';
import Book from './Book'
import {Card} from "semantic-ui-react"
import {connect} from 'react-redux'
import {removeBook} from '../redux/actions'

class Shelf extends Component {



render() {
  const {shelfArray} = this.props
  const bookComponents = shelfArray.map(book => <Book key={book.canonicalVolumeLink} removeBook={this.removeBook} book={book}/>)
  console.log(this.props);

    return (
      <div align="center"> <br/><br/>
      <h1>Shelf</h1>
        <Card.Group centered>
          {bookComponents}
        </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    shelfArray: state.shelfArray
  }
}

export default connect(mapStateToProps, {removeBook})(Shelf)
