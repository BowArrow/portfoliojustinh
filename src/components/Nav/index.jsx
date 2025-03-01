import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarToggler, MDBIcon, MDBCollapse, MDBNavbarNav, MDBNavbarItem } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import './style.css';

class Nav extends Component {
    state = {
        openBasic: false
    }

    render() {
        return (
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <Link className='link-box' to='/'><MDBNavbarBrand>JUSTIN HOLTHOUSE</MDBNavbarBrand></Link>
                    <MDBNavbarToggler
                        aria-controls='navBarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenBasic(!openBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
    
                    <MDBCollapse navbar open={openBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
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
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            // <>
            //     <MDBRow className='navbar'>
            //         <MDBCol md='12'>
            //             <Link className='link-box col-md-12' to='/'>Home</Link>
            //             <Link className='link-box col-md-12' to='/about'>About</Link>
            //         </MDBCol>
            //     </MDBRow>
            // </>
        )
    }
};


export default Nav;
