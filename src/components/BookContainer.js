import React from 'react';
import Book from './Book'
import SearchForm from './SearchForm'
import Links from './Links'
import { Card } from 'semantic-ui-react'

// actions&reducers
import { connect } from 'react-redux'
import { getBooksFromApi } from '../redux/actions'


class BookContainer extends React.Component {

  searchHandler = (search) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + search )
    // put this after search + '&maxResults=40'
      .then(res => res.json())
      .then(data => this.props.getBooksFromApi(data.items))
    }

  render() {
      let bookComponents = this.props.booksFromAPI.map(book => <Book key={book.id} bookObj={book}/>)
      return (
        <div>
          <Links/>
          <SearchForm searchHandler={this.searchHandler}/>
          <Card.Group centered>
            {bookComponents}
          </Card.Group>
        </div>
      )
    }

}

const mapStateToProps = (state) => {
  return {
    booksFromAPI: state.booksFromAPI,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksFromApi: (books) => dispatch(getBooksFromApi(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
