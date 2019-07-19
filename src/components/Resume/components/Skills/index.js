import React, { Component } from 'react';
import SkillBlock from './components/SkillBlock';
import { Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { skills } from '../../../../services/api';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    }
  }

  handleEnter = () => {
    if (!this.state.animate) {
      this.setState({animate: true});
    }
  }

  render() {
    const skillBlocks = skills.map(skill => {
      return <SkillBlock key={skill.title} title={skill.title} value={skill.value} animated={true} beginAnimating={this.state.animate} />
    });
    const mid = Math.ceil(skillBlocks.length / 2);

    return(
      <>
        <Waypoint onEnter={this.handleEnter} bottomOffset="30%"/>
        <Row className="section__resume progress-list js-progress-list">
          <Col md={12}>
            <h3 className="progress-list__title">General Skills</h3>
          </Col>
          <Col md={5} className="mr-auto">
            {skillBlocks.splice(0, mid)}
          </Col>
          <Col md={5} className="mr-auto">
            {skillBlocks}
          </Col>
        </Row>
      </>
    );
  }
}

export default Skills;
