import React, { Component } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';
import Nav from '../Nav/index.jsx';
import CollectionWrapper from '../CollectionWrapper/index.jsx';

class FrontPage extends Component {
    state = {

    }

    render() {
        return (
            <Router>
                <MDBRow className="col-md-12">
                    <Nav />
                </MDBRow>
                <MDBRow className='Pages col-md-12'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/collection/:key' element={<CollectionWrapper />} />
                    </Routes>
                </MDBRow>
            </Router>
        )
    }
}

export default FrontPage;