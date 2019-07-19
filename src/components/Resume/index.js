import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import Education from './components/Education';
import Employment from './components/Employment';
import Skills from './components/Skills';
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { resume } from '../../services/api';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animateHeader: false
    }
  }

  handleEnter = () => {
    if (!this.state.animateHeader)
      this.setState({animateHeader: true});
  }

  render() {
    const { animateHeader } = this.state;
    
    return (
      <Waypoint onEnter={this.handleEnter} bottomOffset="30%">
        <Container id="resume" className="section">
          <Row>
            <Col md={10}>
              <SectionHeader id="resume_header" text="Resume_" beginAnimate={animateHeader}/>
              <p className="section__description">{ resume }</p>
            </Col>
          </Row>
          <Education/>
          <Employment/>
          <Skills/>
        </Container>
      </Waypoint>
    );
  }
}

export default Resume
