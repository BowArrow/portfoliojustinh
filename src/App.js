import React, { Component } from 'react';
import firebase from 'firebase/database';
import FrontPage from './components/FrontPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './App.css';


class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err))
  }

  callBackendAPI = async() => {
    const response =  await fetch('/express_backend');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)
    }

    return body;
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
