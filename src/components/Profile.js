import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentlyReading from './CurrentlyReading'
import Links from './Links'
// import { Image} from "semantic-ui-react"

class Profile extends Component {

render() {
  return (
    <div>
      <Links />
        <h2 className="secondary-header feed-headings">User Profile: Make this a profile</h2>

    </div>
  )
}
}

const mapStateToProps = (state) => {
return {
  user: state.auth.user,

}
}




export default connect(mapStateToProps, null)(Profile)
