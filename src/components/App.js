import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'; 
import { connect } from 'react-redux'; 


class App extends Component {
  componentDidMount() { 
    this.props.handleInitialData(); 
  } 
  render() {
    return (
     
        <div >
           My code 
        </div>
      
    );
  }
}


export default connect( 
  null, 
  { handleInitialData } 
)(App); 

//export default App