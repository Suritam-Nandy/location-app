import React from 'react';
import './App.css';
// import {GOOGLE_API_KEY} from 
// const GOOGLE_API_KEY = "AIzaSyApHqOnW69-bbfPkY1RhWgWfQviAnJ4q68"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);

  }

  getLocation(){
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError ) :
      alert("Geolocation is not supported by this browser.");

  };

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    
  }

  handleLocationError(error) {
   
      switch(error.code) {
        case error.PERMISSION_DENIED:
         alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
         alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
         alert("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
         alert("An unknown error occurred.");
          break;
        default:
          alert("An unknown error occurred.");
    };
  
  }
  
render() {
    return (
      <div className="App">
        <h2>
          React Geolocation Example
        </h2>
        <button onClick={this.getLocation}> Get Coordinates</button>
        <h4>HTML5 Coordinates</h4>
        <p>Latitude:{this.state.latitude}</p>
        <p>Longitude:{this.state.longitude}</p>
        <h4>Google Maps Reverse  </h4>
        <p>Address: {this.state.userAddress}</p>
        {
          this.state.latitude && this.state.longitude ?
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7&C${this.state.latitude},${this.state.longitude}&key=AIzaSyApHqOnW69-bbfPkY1RhWgWfQviAnJ4q68`} alt='' />
            :
            null
        }
        

      </div>
    )
  }
};
export default App;
