import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarToggler, MDBIcon, MDBCollapse, MDBNavbarNav, MDBNavbarItem, MDBRipple } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import './style.css';
import instaicon from '../../assets/instagramicon.png'

class Nav extends Component {
    state = {
        openBasic: false
    }

    render() {
        const { openBasic } = this.state;

        return ( 
            <MDBNavbar expand="lg" className='navibar'>
                <MDBContainer className='nav-container' fluid>
                    <MDBCol md='2'></MDBCol>
                    <MDBNavbarBrand href='/'>JUSTIN HOLTHOUSE</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navBarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => this.setState({openBasic: !openBasic})}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
    
                    {/* <MDBCollapse navbar open={openBasic}> */}
                        <MDBNavbarNav className='mr-0 mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link className='link-box nav-link col-md-12' to='/'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='link-box nav-link col-md-12' to='/about'>About</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Collections
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem><Link className='link-box col-md-12' to='/collections/saint'>Saint Jean Paul</Link></MDBDropdownItem>
                                        <MDBDropdownItem><Link className='link-box col-md-12' to='/collections/choices'>Choices</Link></MDBDropdownItem>
                                        <MDBDropdownItem><Link className='link-box col-md-12' to='/collections/sexuality'>Sexuality</Link></MDBDropdownItem>
                                        <MDBDropdownItem><Link className='link-box col-md-12' to='/collections/automata'>Automata</Link></MDBDropdownItem>
                                        <MDBDropdownItem><Link className='link-box col-md-12' to='/collections/reliquaries'>Reliquaries</Link></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='ms-auto insta-container'>
                                <MDBNavbarBrand href='https://www.instagram.com/j.m.holthouse/' className='insta'><MDBRipple className='instaripple'><img className="instagram-icon" src={instaicon} alt="instagram"/></MDBRipple></MDBNavbarBrand>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBCol md='2'></MDBCol>
                    {/* </MDBCollapse> */}
                </MDBContainer>
            </MDBNavbar>
        )
    }
};


export default Nav;
