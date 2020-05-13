import React, { Component } from 'react'
import './App.css';
import SessionDisplay from './Components/SessionDisplay';
import Spinner from './Components/Spinner';


class App extends Component {

  state = {lat:null,errorMessage:''}
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (pos)=>this.setState({lat:pos.coords.latitude}),
      (err)=>this.setState({errorMessage: err.message})
    )
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return(
        <React.Fragment>
          <h4>ERROR : {this.state.errorMessage}</h4>
       </React.Fragment>
      )
    } else if(!this.state.errorMessage && this.state.lat){
      return(
        <React.Fragment>
        <SessionDisplay lat = {this.state.lat}/>
        </React.Fragment>
      )
    }else{
      return(
         <Spinner msg="Please Accept Location Request"/>
      )
    }
  }

  
  render() {
 
    return(
    <React.Fragment>
        {this.renderContent()}
    </React.Fragment>
    )
   

  }
}


export default App;
