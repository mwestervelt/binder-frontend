import React, { Component } from 'react';
// import {Search, Input, Segment, Form, Button} from 'semantic-ui-react'


export default class SearchForm extends Component {

  state = {
     term: ""
   }

   changeHandler = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }


render() {

  return (
    <div>
    <input className="term"
      onChange={this.changeHandler}
      placeholder="search..."
      value={this.state.term}
      type="text"
      name="term" />
    <button className="button" onClick={() => this.props.searchHandler(this.state.term)}>Search</button>
    </div>

  )
}
}
