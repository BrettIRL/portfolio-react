import React, { Component } from 'react';
import MobileMenu from './components/MobileMenu';
import MenuItem from './components/MenuItem';
import { Container, Row, Col } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { menus } from '../../services/api';


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleClick = (e) => {
    e.preventDefault();
    const target = e.target.attributes.href.value;
    const element = document.getElementById(target.substring(1));
    const scroll = Scroll.animateScroll;
    scroll.scrollTo(element.offsetTop - 50, { 
      duration: 800, 
      smooth: true 
    });
  }

  handleScroll = (e) => {
    if (window.scrollY > 0) {
      document.getElementsByClassName('menu')[0].classList.add('menu--active');
      document.getElementsByClassName('menu')[0].classList.add('mobile-menu--active');
    } else {
      document.getElementsByClassName('menu')[0].classList.remove('menu--active');
      document.getElementsByClassName('menu')[0].classList.remove('mobile-menu--active');
    }
  }

  toggleMobile = (e) => {
    this.setState(state => {
      return {mobileMenuOpen: !state.mobileMenuOpen};
    })
  }

  render() {
    const menuItems = menus.map(menu => {
      return <MenuItem key={menu.to} to={menu.to} title={menu.title} emitClick={this.handleClick} />
    });

    return(
      <>
      <div className="menu">
        <Container>
          <Row>
            <Col lg={12} className="d-none d-lg-block menu__wrapper">
              <nav>
                <ul>
                  {menuItems}
                </ul>
              </nav>
            </Col>
            <Col md={12} className="menu__wrapper d-lg-none">
              <button type="button" className="menu__mobile-button" onClick={this.toggleMobile}>
                  <span><i className="fa fa-bars" aria-hidden="true"></i></span>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <MobileMenu open={this.state.mobileMenuOpen} toggle={this.toggleMobile}/>
      </>
    );
  }
}

export default Menu;
