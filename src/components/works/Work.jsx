import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./work.css"
import { works } from '../../data/Workdata';
import Categories from './Categories';
import WorkList from './WorkList';
const allCategories =['all', ...new Set(works.map((item) => item.category))];


const Work = () => {
      const [workItems, setWorkItems] = useState(works);
      const [categories, setCategories] = useState([allCategories]);

      const filterItems = (category) =>{
            if(category === 'all'){
                  setWorkItems(works);
                  return;
            }
            const newItems = works.filter((item) => item.category === category)
            setWorkItems(newItems);
      }
      return (
            <Container >
                  <Row className="text-center work-header pt-4 pb-3">
                        <Col xs={12} md={12}>
                              <p>My Works</p>
                        </Col>
                  </Row>
                  <Row>
                        <Categories  filterItems={filterItems} categories={categories}/>
                  </Row >
                  <Row>
                        <WorkList works={workItems} />
                  </Row>
            </Container>
      )
}
export default Work
