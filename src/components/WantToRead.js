import React, { Component } from 'react';
import {Card } from "semantic-ui-react"
import UserBook from './UserBook'
import { connect } from 'react-redux'
import Links from './Links'
import { updateBookObjs, updateUserFromFetch } from '../redux/actions'

class WantToRead extends Component {
  componentDidMount () {
    this.getIdsFromUser()
  }

  getIdsFromUser = () => {
    const ids = this.props.user && this.props.wantToRead.map(user_book => user_book.book_id)
    let bookObjs = this.props.user && this.props.user.books.filter(book => ids.includes(book.id))
    this.props.updateBooks(bookObjs)
  }

  deleteBook = (obj) => {
    let choosen_user_book = this.props.wantToRead.filter(user_book => user_book.book_id === obj.id)
    let id = choosen_user_book[0].id
      fetch(`http://localhost:3000/api/v1/user_books/${id}`, {
        method: "DELETE"})
        .then(resp => resp.json())
        .then(resp => {
          this.props.updateUserFromFetch(resp)
          this.getIdsFromUser()
        }
      )
    }

  // handleFilter = (e) => {
  //   e.preventDefault()
  //   if (e.target.filter.value === 'A-Z') {
  //     let books = this.props.bookObjs.sort(function(a, b) {
  //       return a.title.localeCompare(b.title);
  //     })
  //     let update = [...books]
  //     this.props.updateBooks(update)
  //   } else if (e.target.filter.value === 'Z-A') {
  //       let books = this.props.bookObjs.sort(function(a, b) {
  //         return b.title.localeCompare(a.title);
  //     })
  //     let update = [...books]
  //     this.props.updateBooks(update)
  //   } else if (e.target.filter.value === 'Favorites') {
  //     let books = this.props.bookObjs.filter(book => book.favorited === true)
  //     let update = [...books]
  //     this.props.updateBooks(update)
  //   }
  // }

  render() {
    let bookCards = this.props.bookObjs !== undefined && this.props.bookObjs.map(book => <UserBook bookObj={book} key={book.id} deleteBook={this.deleteBook}/>)
    return (
      <div>
        <Links />
        <h2 className="secondary-header user-tab-headers">Books To Read</h2>
        <form onSubmit={(e) => this.handleFilter(e)}>
          <select className="filter" name="filter" >
            <option name="filter" value="A-Z">A-Z</option>
            <option name="filter" value="Z-A">Z-A</option>
            <option name="filter" value="Favorites">Favorites</option>
          </select>
          <input className="button" type="submit" />
        </form>
        <Card.Group centered>
        {bookCards}
        </Card.Group>
      </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.auth.user,
      wantToRead: state.books.wantToRead,
      bookObjs: state.bookObjs
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updateBooks: (books) => dispatch(updateBookObjs(books)),
      updateUserFromFetch: (user) => dispatch(updateUserFromFetch(user))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WantToRead)
