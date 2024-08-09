import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section> */}

            <section className='container py-3'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <NavLink className="navbar-brand fw-bold fs-4" to="/">
                                <img src="/assets/icon_logo.png" alt="icon_logo.png" className="App-logo" />
                                A COLLECTION
                            </NavLink>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <li className="nav-item">
                                <NavLink className="nav-link" target='_blank' to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    contact
                                </NavLink>
                            </li>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                <NavLink className="footer-design "  href="https://www.google.com/maps/place/Abohar,+Punjab/@30.1524608,74.1972184,13z/data=!3m1!4b1!4m6!3m5!1s0x3917a79154f86721:0x4ce09ae52bb2fd93!8m2!3d30.146861!4d74.2008185!16zL20vMDlfeTE2?entry=ttu">
                                    Abohar
                                </NavLink>
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                <NavLink className="footer-design" href="ak7814549452@gamil.com">
                                    ak7814549452@gamil.co
                                </NavLink>
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />
                                <NavLink className="footer-design">
                                    7814549452
                                </NavLink>
                            </p>
                            
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='#'>
                    Arun Kumar
                </a>
            </div>
        </MDBFooter>

    )
}

export default Footer