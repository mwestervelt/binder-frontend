import React, { Component } from 'react';
import {Card} from "semantic-ui-react"


export default class Book extends Component {

render () {
  return (
    <Card>{this.props.book.title}</Card>
  )
}


}
