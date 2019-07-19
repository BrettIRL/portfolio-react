import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

class SkillBlock extends React.Component {
  render() {
    const { title, animated, beginAnimating } = this.props;
    let value = animated ? 0 : this.props.value;

    if (beginAnimating) {
      value = this.props.value;
    }

    return (
      <div className="progress-list__skill">
        <p>
          <span className="progress-list__skill-title">{ title }</span>
          <span className="progress-list__skill-value">{ value }%</span>
        </p>
        <ProgressBar now={value} min="0" max="100" />
      </div>
    );
  }
}

SkillBlock.propTypes = {
  animated: PropTypes.bool.isRequired,
  beginAnimating: PropTypes.bool,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default SkillBlock;
