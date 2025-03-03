import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import bg from '../../assets/testbg.png'

class Home extends Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow className='bg-black'>
                    <MDBCol md='2'></MDBCol>
                    <MDBCol md='8'>
                        <MDBRow >
                            <MDBCol sm='1'>

                            </MDBCol>
                            <MDBCol sm='7'>
                                <img src={bg} />
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                    <div className='d-flex description align-items-center'>
                                        <div className='d-flex flex-column clearfix justify-content-left'>
                                            <h1 className='text-white'>Welcome! </h1>
                                            <p className='text-white mb-0 description-text'>This space is a reflection of identity, memory, and transformation. Through material and form, my work explores the tension between self-acceptance and imposed expectations, inviting you into a conversation about resilience, queerness, and the power of reclaiming one’s truth.</p>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>

                        </MDBRow>

                    </MDBCol>
                    <MDBCol md='2'></MDBCol>
                </MDBRow>

            </MDBContainer>
        )
    }
}

export default Home;