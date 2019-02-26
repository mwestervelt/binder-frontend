import React, { Component } from 'react';
import {Card, Dropdown, Button} from "semantic-ui-react"
import {connect} from 'react-redux'

//
import { addToBookshelf } from '../redux/actions'
import { removeBook } from '../redux/actions'


const options = [
  {key: 'read', text: 'have read', value: 'read'},
  {key: 'reading', text: 'currently reading', value: 'reading'},
  {key: 'want', text: 'want to read', value: 'want'},
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
   this.props.addToBookshelf(this.props.book)

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
      <img alt="" src={this.props.book.imageLinks.thumbnail}/>
      <Dropdown placeholder="add to bookshelf?" fluid selection options={options} onChange={this.handleChange} />
      <Button onClick={this.handleClick}>remove from shelf</Button>
    </Card>
    )
  }

}

export default connect(null, {addToBookshelf, removeBook})(Book)
