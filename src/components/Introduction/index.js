import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { introduction } from '../../services/api';
import btn_icon from '../../assets/img/img_btn_icon.png';

class Introduction extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      animateHeader: false
    };
  }

  handleEnter = () => {
    if (!this.state.animateHeader)
      this.setState({animateHeader: true});
  }

  render() {
    const { animateHeader } = this.state;

    return (
      <Waypoint onEnter={this.handleEnter} bottomOffset="10%">
        <Container id="hello" className="section">
          <Row>
            <Col md={10}>
              <SectionHeader id="hello_header" text="Hi_" beginAnimate={animateHeader}/>
              <p className="section__description">{ introduction }</p>
              <a href="assets/files/brettCockingResume-fs.pdf" className="section_btn site-btn" download><img src={btn_icon} alt="Download CV"/>Download CV</a>
            </Col>
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default Introduction;
