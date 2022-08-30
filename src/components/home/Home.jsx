import React from 'react'
import homeimage from "./homeicon.png"
import "./home.css"
import homedata from "../../data/HomeData"
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
      return (
            <Container className="home-main-container">
                  <Row>
                        <Col xs={12} md={5} className="my-auto">
                              <h2 style={{ "color": "#3BA6B7", "fontWeight": "700" }}>Hello I'm</h2>
                              <p className="home-name">Prashant Ulak</p>
                              <hr style={{ "borderTop": "4px solid #3BA6B7" }} />
                              <p className="home-body-title">I'm a Frontend & UI/UX Designer</p>
                              <hr style={{ "borderTop": "4px solid #3BA6B7" }} />
                              <p className="home-body-content">Passionate about bringing forward 
                              great products; whether that's through development or design. 
                              Always keen to learn something new.</p>
                        </Col>
                        <Col xs={12} md={1}></Col>
                        <Col xs={12} md={6}>
                              <img src={homeimage} alt="homeimage" className="homeimage" className="img-fluid" />
                        </Col>
                  </Row>
            </Container>
      )
}

export default Home
