import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import BookContainer from './components/BookContainer'


class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      fetch("http://localhost:3000/api/v1/user", {
        headers: {
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data =>
          data.error ? alert(`Must Log In`) : this.setState({ user: data.user })
        );
    } else {
      this.props.history.push("/login");
    }
  }


  createUser = (e, userObj) => {
    console.log("are we hitting this", userObj);
      const { username, email, password } = userObj
      fetch("http://localhost:3000/api/v1/users", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              Accepts: "application/json"
          },
          body: JSON.stringify({ username, email, password})
      })
          .then(resp => resp.json())
          .then(data => console.log(data))
  };

  loginUser = userObj => {
      const { email, password } = userObj
      fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              Accepts: "application/json"
          },
          body: JSON.stringify({ user: { email: email, password: password } })
      })
          .then(res => res.json())
          .then(data =>
        data.error ? alert(`${data.error}`) : this.setState({ user: data.user })
      );
  }

  isThereAUser = () => {
   return Object.keys(this.state.user).length > 0;
 };

  render() {
    return (
      <div className="App">
        {this.isThereAUser() ? (
        <Nav user={this.state.user}/>
        ) : (
          <Nav submitHandler={this.loginUser} />
        )}
        <Switch>
         <Route
           path="/"
           render={() => {
             return (
               <div>
                 {this.isThereAUser() ? (
                "there is a user"
                 ) : (
                   <Redirect to="/login" />
                 )}
                  <BookContainer />
               </div>

             );
           }}
         />
         <Route
           path="/home"
           render={() => {
             return (
               <div>
                 {this.isThereAUser() ? "you're logged in" : <Redirect to="/login" />}
               </div>
             );
           }}
         />
         <Route
           path="/signup"
           render={() => <Signup submitHandler={this.createUser} />}
         />
         <Route
           path="/login"
           render={() => <Login submitHandler={this.loginUser} />}
         />
       </Switch>

      </div>
    );
  }
}

export default withRouter(App);
