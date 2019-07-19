import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { categories } from '../../../../services/api';
import './ProjectMenu.scss';

class ProjectMenu extends React.Component {

  handleClick = (tag) => {
    this.props.emitChange(tag);
  }

  render() {
    const { targetTag } = this.props;
    const catList = categories.map(cat => {
      return (
        <li key={cat.tag}>
          <button className={'portfolio-menu__button' + (cat.tag === targetTag ? ' active' : '')} onClick={() => { this.handleClick(cat.tag) }}>{cat.title}</button>
        </li>
      );
    });

    return (
      <Row className="portfolio-menu">
        <Col md={12}>
          <nav>
            <ul>
              {catList}
            </ul>
          </nav>
        </Col>
      </Row>
    )
  }
}

ProjectMenu.propTypes = {
  targetTag: PropTypes.string.isRequired,
  emitChange: PropTypes.func.isRequired
}

export default ProjectMenu;
