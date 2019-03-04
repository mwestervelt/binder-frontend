import React, { Component } from 'react';
import {Card, Dropdown, Image} from "semantic-ui-react"

// redux stuff
import { connect } from 'react-redux'
import { updateUserFromFetch, updateBookObjs } from '../redux/actions'


const shelftypes = [
  {key: 'read', text: 'Have Read', value: 'read'},
  {key: 'reading', text: 'Currently Reading', value: 'currently_reading'},
  {key: 'want', text: 'Want to Read', value: 'want_to_read'},
]


class Book extends Component {

state = {}

handleChange = (e, { value }) => {
  console.log("changed dropdown", value);
  this.setState({ value })
}
// (e) => this.addToBookshelf(e, this.props.bookObj)


  addToBookshelf = (e, bookObj) => {
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
          title: this.props.bookObj.volumeInfo.title,
          author: this.props.bookObj.volumeInfo.authors[0],
          description: this.props.bookObj.volumeInfo.description,
          image:  this.props.bookObj.volumeInfo.imageLinks.thumbnail,
        })
      }
        fetch('http://localhost:3000/api/v1/books', options)
        .then(resp => resp.json())
        .then(book => fetch('http://localhost:3000/api/v1/user_books', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
          body: JSON.stringify({
            shelf_type: this.state.value,
            book_id: book.id,
            user_id: this.props.user.id,
          })
        }))
          .then(resp => resp.json())
          .then(data => {console.log("are you updating?", data)
            this.props.updateUserFromFetch(data.user)
            const ids = data.user.want_to_read.map(user_book => user_book.book_id)
            let books = data.user.want_to_read.filter(book => ids.includes(book.id))
            this.props.updateBooks(books)
          }
        )
      }

  render() {
    const { value } = this.state
    return (
  <Card>
  <Card.Content textAlign="center">
      <Card.Header >
        {this.props.bookObj.volumeInfo.title}
        </Card.Header>
        <Card.Meta>
        {this.props.bookObj.volumeInfo.authors}
  </Card.Meta>
  <Image  alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>

  </Card.Content>




          <Dropdown
            placeholder='Add to Bookshelf' fluid
            selection
            onChange={this.handleChange}
            onClose={(e) => this.addToBookshelf(e, this.props.bookObj)}
            options={shelftypes}
            value={value}/>
        </Card>
      )
    }
  }


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    bookObjs: state.bookObjs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserFromFetch: (user) => dispatch(updateUserFromFetch(user)),
    updateBooks: (books) => dispatch(updateBookObjs(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
