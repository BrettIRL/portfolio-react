import React, { Component } from 'react';
import EmploymentBlock from './components/EmploymentBlock';
import { Row, Col } from 'react-bootstrap';
import { employment } from '../../../../services/api';

class Employment extends Component {
  render() {

    const emplymentItems = employment.map(emp => {
      return (
        <EmploymentBlock key={emp.title + emp.position} employment={emp} />
      );
    })

    return (
      <Row>
        <Col md={8} className="section__resume resume-list">
          <h3 className="resume-list_title">Employment</h3>
          { emplymentItems }
        </Col>
      </Row>
    );
  }
}

export default Employment;
