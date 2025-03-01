import React, { Component } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Nav from '../Nav';
import CollectionWrapper from '../CollectionWrapper';

class FrontPage extends Component {
    state = {

    }

    render() {
        return (
            <Router>
                <Nav />
                <MDBRow className='Pages'>
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