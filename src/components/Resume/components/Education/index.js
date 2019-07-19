import React from 'react';
import EducationBlock from './components/EducationBlock';
import { Row, Col } from 'react-bootstrap';
import { education } from '../../../../services/api'

class Education extends React.Component {
  render() {

    const educationItems = education.map(edu => {
      return (
        <EducationBlock key={edu.title} education={edu} />
      );
    });

    return (
      <Row>
        <Col md={8} className="section__resume resume-list">
          <h3 className="resume-list_title">Education</h3>
          { educationItems }
        </Col>
      </Row>
    );
  }
}

export default Education;
