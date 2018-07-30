import React from 'react';
import { Link } from 'react-router';
import '../styles/style.css'


const HomePage = () => (
  
  <div className={["jumbotron center",'bg'].join(' ')} >

    <h1 className="lead">Gallery Engine</h1>
    <div >
      <Link to="library">
        <button className={["btn btn-lg btn-primary","button"].join(" ")}> Visit Library</button>
      </Link>
    </div>
    
  </div>
  
);

export default HomePage;