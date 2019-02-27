import React, { Component, Fragment} from 'react'
// import PropTypes from 'prop-types'
import {Menu} from "semantic-ui-react"
import Login from './Login'
import SearchForm from './SearchForm'
import { connect } from 'react-redux'
import { displaySomeBooks } from '../redux/actions'




// const colors = ['violet']
// const userExists = Object.keys(this.props.user).length > 0

class Nav extends Component {


  state = {
    term: "",
    bookList: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  changeHandler = e => {
      let term = e.target.value;
      this.setState({
        term: term
      });
    };

    submitHandler = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/api/v1/books/search', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(array =>
        this.props.displaySomeBooks(array)
      )
    }

  render () {
    // console.log("nav has the search term", this.state)
    return (
        <Menu inverted>
          <Menu.Item>
          <SearchForm
            submitHandler={this.submitHandler}
            value={this.state.term}
            changeHandler={this.changeHandler} />
          </Menu.Item>
        <Fragment>
          <Menu.Item
            position='right'
            name="Login"
            active
            onClick={this.handleItemClick}>
          <Login
            submitHandler={this.props.submitHandler} />
          </Menu.Item>
        </Fragment>
        </Menu>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    displaySomeBooks: (array) => {
      dispatch(displaySomeBooks(array))
    }
  }
}


export default connect(null, mapDispatchToProps)(Nav)
