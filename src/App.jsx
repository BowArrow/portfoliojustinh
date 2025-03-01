import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import FrontPage from '../src/components/FrontPage';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

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
