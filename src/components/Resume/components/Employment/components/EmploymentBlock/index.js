import React from 'react';
import PropTypes from 'prop-types';

class EmploymentBlock extends React.Component {
  render() {
    const { title, from, to, position } = this.props.employment;

    return (
      <div className="resume-list__block">
        <p className="resume-list__block-title">{ title }</p>
        <p className="resume-list__block-date">{ from } - { to }</p>
        <p>{ position }</p>
      </div>
    );
  }
}

EmploymentBlock.propTypes = {
  employment: PropTypes.shape({
    title: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    position: PropTypes.string
  }).isRequired
};

export default EmploymentBlock;
