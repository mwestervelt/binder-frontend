import React, { Component, Fragment} from 'react'
// import PropTypes from 'prop-types'
import {Menu} from "semantic-ui-react"
import Login from './Login'




// const colors = ['violet']
// const userExists = Object.keys(this.props.user).length > 0

export default class Nav extends Component {


  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render () {
    console.log(this.props);


    return (

        <Menu inverted>
          <Fragment>
            <Menu.Item position='right'
              name="Login"
               active
               onClick={this.handleItemClick}
               > <Login submitHandler={this.props.submitHandler} />
            </Menu.Item>
            </Fragment>
        </Menu>
    )
  }

}
