import React, { Component } from 'react'
import { Button, Form, Modal, Icon, Label} from "semantic-ui-react";

class Signup extends Component {

  state = {
    username: "",
    email: "",
    password: ""
  }


// handleItemClick = (e, { name }) => this.setState({ activeItem: name })




  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    console.log(this.props)
    e.preventDefault()
    this.props.submitHandler(e, this.state)
    this.setState({
      name: "",
      email: "",
      password: ""
    })
    console.log("hello");
  }

  render() {

    return (

      <Modal size="small" trigger={<Button>Sign up</Button>}>
        <Modal.Header>Sign up!</Modal.Header>

          <Modal.Content>
            <Form onSubmit={this.submitHandler}>
              <Label pointing="below">Username:</Label>
                <Form.Input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.changeHandler}
                  />
              <Label pointing="below">Email:</Label>
                <Form.Input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  />
              <Label pointing="below">Password:</Label>
                <Form.Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  />
              <br></br><br></br>

              <Modal.Actions>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Log in
              </Button>
            </Modal.Actions>
            </Form>

      </Modal.Content>
    </Modal>
    )
  }
}


export default Signup
