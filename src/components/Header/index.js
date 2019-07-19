import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Container>
          <Row className="personal-profile">
            <Col md={12}>
              <p className="personal-profile__name">{ process.env.REACT_APP_NAME }_</p>
              <p className="personal-profile__work"> { process.env.REACT_APP_POSITION }</p>
              <div className="personal-profile__contacts">
                <dl className="contact-list contact-list__opacity-titles">
                  <dt>Phone:</dt>
                  <dd><a href={"tel:" + process.env.REACT_APP_PHONE }>+{ process.env.REACT_APP_PHONE }</a></dd>
                  <dt>Email:</dt>
                  <dd><a href={"mailto:" + process.env.REACT_APP_EMAIL }>{ process.env.REACT_APP_EMAIL }</a></dd>
                  <dt>Location:</dt>
                  <dd>{ process.env.REACT_APP_LOCATION }</dd>
                </dl>
              </div>
              <p className="personal-profile__social">
                <a href={"https://github.com/" + process.env.REACT_APP_GITHUB } target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                <a href={"https://linkedin.com/in/" + process.env.REACT_APP_LINKEDIN } target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      
    );
  }
}

export default Header;
