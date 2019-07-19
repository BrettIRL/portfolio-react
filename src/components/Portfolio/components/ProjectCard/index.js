import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './ProjectCard.scss';

class ProjectCard extends React.Component {
  render() {
    const { image, title, desc, info, stack } = this.props.project;
    let infoBlock;

    if (info) {
      infoBlock = (
      <p className="project-card__description">
        <strong>{info}</strong>
      </p>);
    }

    const stackTags = stack.map(tag => {
      return (<li key={tag}>{tag}</li>)
    });

    return (
      <Row className="project-card">
        <Col md={6} lg={5} className="project-card__img">
          <img src={image} alt="project-img"/>
        </Col>
        <Col md={6} lg={7} className="project-card__info">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{desc}</p>
          {infoBlock}
          <p className="project-card__stack">Stack:</p>
          <ul className="tags">
            {stackTags}
          </ul>
        </Col>
      </Row>
    );
  }
}

ProjectCard.propTypes = PropTypes.shape({
  project: {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    info: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired
  }
}).isRequired;

export default ProjectCard;
