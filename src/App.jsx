import React, { Component } from 'react';
import FrontPage from '../src/components/FrontPage/index.jsx';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import './App.css'

class App extends Component {
  state = {
    data: null
  }

  render() {
    return (
      <MDBContainer fluid>
        <FrontPage />
      </MDBContainer>
    )
  }

}

export default App;
