import React from 'react';
import PropTypes from 'prop-types';

class EducationBlock extends React.Component {
  render() {
    const { title, date, desc } = this.props.education;
    
    return (
      <div className="resume-list__block">
        <p className="resume-list__block-title">{ title }</p>
        <p className="resume-list__block-date">{ date }</p>
        <p>{ desc }</p>
      </div>
    );
  }
}

EducationBlock.propTypes = {
  education:PropTypes.shape({
    title: PropTypes.string, 
    date: PropTypes.string,
    desc: PropTypes.string
  }).isRequired
};

export default EducationBlock;
