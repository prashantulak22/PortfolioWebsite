import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Categories = ({ filterItems, categories }) => {
      return (
            <Container>
                  <Row>
                        {categories.map((category, index) => {
                              return (
                                    <Col md={12} className="text-center">
                                          <button type="button" key={index} onClick={() => filterItems(category)}>
                                                {category}
                                          </button>
                                    </Col>
                              );
                        })}
                  </Row>
            </Container>
      )
}

export default Categories
