import React, { Component } from 'react';
import firebase from 'firebase/database';
import FrontPage from '../src/components/FrontPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './App.css'

class App extends Component {
  state = {
    data: null
  }

  render() {
    const firebaseApp = firebase.apps[0];
    return (
      <MDBContainer fluid>
        <FrontPage />
      </MDBContainer>
    )
  }

}

export default App;
