import React from 'react'
import "./work.css";
import { Col , Row} from 'react-bootstrap';


const WorkList = ({ works }) => {
      return (
            <Row>
                  {works.map((menuItem) => {
                        const { id, img } = menuItem;
                        return (
                              <Col xs={10} md={4} className="mx-auto  px-5 py-4" key={id}>
                                    <img  src={img} alt="alu" className="img-fluid pics"  />
                              </Col>
                        )
                  })}
            </Row>

      )
}

export default WorkList
