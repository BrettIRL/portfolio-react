import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {

  handleClick = (e) => {
    this.props.emitClick(e);
  }

  render() {
    const { to, title } = this.props
    return (
      <li><a href={to} onClick={this.handleClick}>{title}</a></li>
    );
  }
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  emitClick: PropTypes.func
}

export default MenuItem;
