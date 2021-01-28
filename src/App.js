import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation(){
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(this.getCoordinates) :
      alert("Geolocation is not supported by this browser.");

  };

  getCoordinates(position) {
    this.setState({
      
    });
    
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
        <p>Address: { this.state.userAddress}</p>
        

      </div>
    )
  };
};
export default App;
