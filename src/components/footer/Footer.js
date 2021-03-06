import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css';


const Footer = () => {
    return(
        <MDBFooter color="blue" className="font-small pt-4" style = {{backgroundColor: "#545454", marginBottom: "-50px"}}>
            <MDBContainer fluid className="text-center text-md-left" style={{paddingBottom: "0em", marginBottom: "0em"}}>
                <MDBRow style={{padding: "1em 3em 1em 3em"}}>
                    <MDBCol md="2">
                        <h5 className="title">Explore</h5>
                        <p className = "list-unstyled">
                            <a className = "footer-links" href="#!">Search</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">About</h5>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Our Why</a>
                        </p>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">FAQ</a>
                        </p>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Using our platform</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Terms</h5>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Privacy Policy</a>
                        </p>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Terms of Service</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Class Providers</h5>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Current Partners</a>
                        </p>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Become a Partner</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="2" style = {{right: 0, position: 'absolute'}}>
                        <h5 className="title">Contact</h5>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Get in touch</a>
                        </p>
                        <p className="list-unstyled">
                            <a className = "footer-links" href="#!">Join our mailing list</a>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;