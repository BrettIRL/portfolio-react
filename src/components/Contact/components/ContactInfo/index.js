import React from 'react';

class ContactInfo extends React.Component {
  render() {
    return (
      <>
        <div className="contacts__list">
          <dl className="contact-list">
            <dt>Phone:</dt>
            <dd><a href={"tel:" + process.env.REACT_APP_PHONE }>+{ process.env.REACT_APP_PHONE }</a></dd>
            <dt>Email:</dt>
            <dd><a href={"mailto:" + process.env.REACT_APP_EMAIL }>{ process.env.REACT_APP_EMAIL }</a></dd>
          </dl>
        </div>
        <div className="contacts__social">
          <ul>
            <li><a href={"https://linkedin.com/in/" + process.env.REACT_APP_LINKEDIN }>Linkedin</a></li>
            <li><a href={"https://github.com/" + process.env.REACT_APP_GITHUB }>GitHub</a></li>
          </ul>
        </div>
      </>
    );
  }
}

export default ContactInfo;
