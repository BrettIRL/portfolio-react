import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import './Contact.scss';

class Contact extends Component {

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
        <div id="contact" className="background">
          <Container className="section">
            <Row>
              <Col md={12}>
                <SectionHeader id="contacts_header" text="Get in touch_" beginAnimate={animateHeader}/>
              </Col>
            </Row>
            <Row className="contacts">
              <Col md={5} lg={4}>
                <ContactInfo />
              </Col>
              <Col md={7} lg={5}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>
      </Waypoint>
    );
  }
}

export default Contact;
