import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css';


const Footer = () => {
    return(
        <MDBFooter color="blue" className="font-small pt-4 mt-4" style = {{backgroundColor: "#545454"}}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="2">
                    <h5 className="title">Explore</h5>
                    <p className = "list-unstyled">
                        <a href="#!">Search</a>
                    </p>
                </MDBCol>
                <MDBCol md="2">
                    <h5 className="title">About</h5>
                    <p className="list-unstyled">
                        <a href="#!">Our Why</a>
                    </p>
                    <p className="list-unstyled">
                        <a href="#!">FAQ</a>
                    </p>
                    <p className="list-unstyled">
                        <a href="#!">Using our platform</a>
                    </p>
                </MDBCol>
                <MDBCol md="2">
                    <h5 className="title">Terms</h5>
                    <p className="list-unstyled">
                        <a href="#!">Privacy Policy</a>
                    </p>
                    <p className="list-unstyled">
                        <a href="#!">Terms of Service</a>
                    </p>
                </MDBCol>
                <MDBCol md="2">
                    <h5 className="title">Class Providers</h5>
                    <p className="list-unstyled">
                        <a href="#!">Current Partners</a>
                    </p>
                    <p className="list-unstyled">
                        <a href="#!">Become a Partner</a>
                    </p>
                </MDBCol>
                <MDBCol md="2" style = {{right: 0, position: 'absolute'}}>
                    <h5 className="title">Contact</h5>
                    <p className="list-unstyled">
                        <a href="#!">Get in touch</a>
                    </p>
                    <p className="list-unstyled">
                        <a href="#!">Join our mailing list</a>
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;