import React from 'react';
import PropTypes from 'prop-types';

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.text,
      hasAnimated: false
    };
  }

  componentDidUpdate() {
    if (this.props.beginAnimate)
      this.animateText();
  }

  animateText = () => {
    document.getElementById(this.props.id).classList.remove('hide');
    if (!this.state.hasAnimated) {
      var text = this.props.text;
      this.setState({ 
        header: '',
        hasAnimated: true
      });

      var animateStep = () => {
        if (text.length > 0) {
          this.setState(state => {
            return { header: state.header + text.substr(0, 1) };
          }, () => {
            text = text.substr(1);
            setTimeout(animateStep, 100);
          });
        }
      } 
      animateStep();
    }
  }

  render() {
    const { id } = this.props;
    const { header } = this.state;

    return (
      <h2 id={id} className="section__title hide">{ header }</h2>
    );
  }
}

SectionHeader.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  beginAnimate: PropTypes.bool.isRequired
}
 
export default SectionHeader;