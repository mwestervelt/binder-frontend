import React, { Component } from 'react';
import {Card, Dropdown, Button, Image} from "semantic-ui-react"
import {connect} from 'react-redux'

//
import { addToBookshelf } from '../redux/actions'
import { removeBook } from '../redux/actions'
import { patchShelf } from '../redux/thunks'


const options = [
  {key: 'read', text: 'have read', value: 'have_read'},
  {key: 'reading', text: 'currently reading', value: 'currently_reading'},
  {key: 'want', text: 'want to read', value: 'want_to_read'},
]

class Book extends Component {

  // state = {
  //   clicked: false
  // }

getAuthor = () => this.props.book.authors.join(", ")
//
// handleClick = () => {
//   console.log(this.props.book.title)
//   this.setState(prevState => ({
//     clicked: !prevState.clicked
//   }))
// }

handleChange = () => {
   this.props.patchShelf(this.props.book)

}

handleClick = () => {
  this.props.removeBook(this.props.book)
}

render () {
console.log(this.props);
  return (
    <Card >
    <Card.Content>
      <Card.Header>
        {this.props.book.title}
      </Card.Header>
      <Card.Meta>
        {this.props.book.authors}
      </Card.Meta>
      </Card.Content>
  <Image alt="" src={'https://www.graphicsfuel.com/wp-content/uploads/2010/10/blue-book-preview.png'}/>
      {/*<img alt="" src={this.props.book.imageLinks.thumbnail}/>*/}
      <Dropdown placeholder="add to bookshelf?" fluid selection options={options} onChange={this.handleChange} />
      <Button onClick={this.handleClick}>remove from shelf</Button>
    </Card>
    )
  }

}


export default connect(null, {addToBookshelf, removeBook, patchShelf})(Book)
