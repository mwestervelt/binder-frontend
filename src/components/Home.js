import React from 'react';
import { Segment, Image, Button, Icon} from "semantic-ui-react"
import SearchForm from './SearchForm'



const Home = () => {
    return <div className="homepage">
        <div id="welcomemessage">
          <h1 className="welcome-header">A welcoming welcome message:</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <SearchForm  />
      </div>


}



export default Home
