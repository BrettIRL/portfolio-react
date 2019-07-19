import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import ProjectMenu from './components/ProjectMenu';
import ProjectList from './components/ProjectList';
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animateHeader: false,
      targetTag: 'all'
    }
  }

  handleEnter = () => {
    if (!this.state.animateHeader)
      this.setState({animateHeader: true});
  }

  handleChange = (tag) => {
    this.setState({targetTag: tag});
  }

  render() {
    const { animateHeader, targetTag } = this.state;

    return (
      <Waypoint onEnter={this.handleEnter} bottomOffset="30%">
        <Container id="portfolio" className="section">
          <Row>
            <Col md={12}>
              <SectionHeader id="portfolio_header" text="Recent Projects_" beginAnimate={animateHeader}/>
            </Col>
          </Row>
          <ProjectMenu targetTag={targetTag} emitChange={this.handleChange}/>
          <ProjectList targetTag={targetTag} />
        </Container>
      </Waypoint>
    );
  }
}

export default Portfolio;
