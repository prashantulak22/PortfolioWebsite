import React from 'react'
import aboutimage from "./abouticon.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./about.css"
import aboutdata from "../../data/AboutData"
import {AiOutlineDownload} from "react-icons/ai"


const About = () => {
      return (
            <Container className="about-main-container">
                  <Row>
                        <Col xs={12} md={6}>
                              <img src={aboutimage} alt="homeimage" className="homeimage" class="img-fluid" />
                        </Col>
                        <Col xs={12} md={1}></Col>
                        <Col xs={12} md={5}>
                              <p style={{ "color": "#3BA6B7", "fontWeight": "700" , "fontSize": "4rem"}} className="pb-3">About</p>
                              <p className="pb-4">Passionate about bringing forward great products; whether
                                    that's through development or design. Always keen to learn something new.
                                    Passionate about bringing forward great products; whether that's through
                                    development or design. Always keen to learn something new.
                              </p>
                              <p><span>Email:</span> prashant.ulak@outlook.com</p>
                              <p><span>Phone Number:</span> +977 9861691382</p>
                              <p><span>Nationality:</span> Nepalese</p>
                              <button className="cv-btn mt-4">Download CV <AiOutlineDownload style={{"fontSize":"29px"}}/></button>
                        </Col>
                  </Row>
            </Container>
      )
}

export default About
