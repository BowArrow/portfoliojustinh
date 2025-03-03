import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import bg from '../../assets/JustinBGFull.png';

class Home extends Component {

    render() {
        return (
            <>
                <MDBContainer>
                    <MDBRow className='bg-black mb-6'>
                        <MDBCol md='2'></MDBCol>
                        <MDBCol className='desc-container'>
                            <div className='bg-image'>
                                <img src={bg} className='home-image' />
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                    <div className='d-flex clearfix description align-items-center'>
                                        <div className='d-flex flex-column'>
                                            <h1 className='text-white description-title'>Welcome! </h1>
                                            <p className='text-white description-text'>This space is a reflection of identity, memory, and transformation. Through material and form, my work explores the tension between self-acceptance and imposed expectations, inviting you into a conversation about resilience, queerness, and the power of reclaiming one’s truth.</p>
                                            <Link to='/about' className='description-link'>Learn More About Me →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md='2'></MDBCol>
                    </MDBRow>
                    <MDBRow className='text-black'>
                        <MDBCol md='4'></MDBCol>
                        <MDBCol>
                            <div className='d-flex flex-column'>
                                <h1 className='contact-title'>CONTACT</h1>
                                <p className='contact-text'>Contact for inquiries, collaborations, commissions, or media requests. Fill out the form below, and I’ll respond as soon as possible.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md='4'></MDBCol>
                    </MDBRow>
                    <MDBRow className='text-black'>
                        <MDBCol md='4'></MDBCol>
                        <MDBCol>
                            <form>
                                <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
                                <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
                                <MDBInput type='tel' id='typePhone' wrapperClass='mb-4' label='Phone Number' />
                                <MDBTextArea wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message/Inquiry' />

                                <MDBBtn type='submit' className='mb-4 bg-dark' block>
                                    Send
                                </MDBBtn>
                            </form>
                        </MDBCol>
                        <MDBCol md='4'></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

export default Home;