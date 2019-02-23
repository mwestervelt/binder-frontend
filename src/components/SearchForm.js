import React, { Component } from 'react';
// import {Search, Input, Segment, Form, Button} from 'semantic-ui-react'


export default class SearchForm extends Component {


render() {
  console.log(this.props);
  return (

    <form onSubmit={this.props.submitHandler}>
        <input
          name="search"
          type="text"
          value={this.props.value}
          onChange={this.props.changeHandler}
          placeholder="search...."

        />
        <input type="submit"/>

    </form>

  )
}
}
