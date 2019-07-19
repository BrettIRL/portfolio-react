import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import './ContactForm.scss';

const validEmail = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {}
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;
    
    switch(name) {
      case 'name':
        errors.name = value.length < 3 ? 'Name must be longer than 3 characters' : '';
        break;
      case 'email':
        errors.email = validEmail.test(value) ? '' : 'Must be a valid email';
        break;
      case 'message':
        errors.message = value.length < 12 ? 'Message must be longer than 12 characters' : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (this.formIsValid()) {
      axios.post(process.env.REACT_APP_EMAILJS_URL, {
        service_id: process.env.REACT_APP_EMAILJS_SERVICEID,
        template_id: process.env.REACT_APP_EMAILJS_TEMPLATEID,
        user_id: process.env.REACT_APP_EMAILJS_USERID,
        template_params: {
          name,
          email,
          message
        }
      });
    }
  }

  formIsValid = () => {
    const { errors } = this.state;
    let valid = true;
    Object.values(errors).forEach(val => {
      val.length > 0 && (valid = false)
    })

    return valid;
  }

  render() {
    const { name, email, message, errors } = this.state;
    return (
      <div className="contacts__form">
        <Form className="js-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <input className="form-field" type="text" name="name" onChange={this.handleChange} placeholder="Your name" value={name} required />
            { errors.name && errors.name.length > 0 && <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span> }
          </FormGroup>
          <FormGroup>
            <input className="form-field" type="email" name="email" onChange={this.handleChange} placeholder="Your email" value={email} required />
            { errors.email && errors.email.length > 0 && <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span> }
          </FormGroup>
          <FormGroup>
            <textarea className="form-field" name="message" onChange={this.handleChange} placeholder="Type your message here" value={message} required></textarea>
            { errors.message && errors.message.length > 0 && <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span> }
          </FormGroup>
          <button className="site-btn site-btn--form" type="submit" value="Send">Send</button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
