import React from 'react';
import MenuItem from '../MenuItem';
import { Container } from 'react-bootstrap';
import { menus } from '../../../../services/api';
import PropTypes from 'prop-types';

class MobileMenu extends React.Component {

  handleClick = (e) => {
    this.props.toggle();
  }

  render() {
    const { open } = this.props;
    const menuItems = menus.map(menu => {
      return <MenuItem key={menu.to} to={menu.to} title={menu.title} />
    });

    return (
      <div className={'mobile-menu d-lg-none ' + (open ? 'active' : '')}>
        <Container>
          <div className="mobile-menu__close">
              <span><i className="mdi mdi-close" aria-hidden="true" onClick={this.handleClick}></i></span>
          </div>
          <nav className="mobile-menu__wrapper">
              <ul>
                {menuItems}
              </ul>
          </nav>
        </Container>
    </div>
    );
  }
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,

}

export default MobileMenu;
