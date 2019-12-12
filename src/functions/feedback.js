import '../App.css';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';



class CrunchyFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: '-35%',
      right: '-65%',
      name: '',
      email: '',
      message: '',
      password: ''
    };
    this.toggle = this.toggle.bind(this);
    this.untoggle = this.untoggle.bind(this);
    this.handle = this.handle.bind(this);
  }
  toggle = () => {
    this.setState({ left: '0%', right: '0%' });
  }
  untoggle = () => {
    this.setState({ left: '-35%', right: '-65%' });
  }
  handle = async () => {
    if ( this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
      alert('Thank you for your feedback, we appreciate your help in improving our platform. This is being sent to our team so they can make changes.')
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      password: this.state.password
    };
    await fetch('http://localhost:2000/feedback/crunchy_cake', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => alert('Thank you for your feedback, we appreciate your help in improving our platform. This is being sent to our team so they can make changes.'))
      .catch(error => console.error('Error:', error));
    }
  }

  render() {
    return (
      <div>
        <OverlayTrigger
          key='top'
          place='top'
          delay={{ show: 100, hide: 150 }}
          overlay={
            <Tooltip className='tooltip'>
              Feedback : Click here.
            </Tooltip>
          }
        >
          <div className='myhotspot' id='feedback' onClick={this.toggle}></div>
        </OverlayTrigger>
        <div style={{ backgroundColor: '#009bff', width: '35%', height: '100%', borderRadius: '10px', left: this.state.left, position: 'fixed', opacity: '0.8', transition: 'all 300ms linear' }} >
          <div style={{ height: '80%', marginLeft: '10px', marginRight: '10px', marginTop: '30px', marginBotton: '10px', background: '#fff', borderRadius: '10px' }}>
            <div className='container-contact1'>
              <span className='contact1-title'>Feedback</span>
            </div>
            <form className='contact1-form validate-form'>
              <span className='contact1-form-content'>
                Our platform is still a work in progress.<br />
                We welcome all feedback and suggestions to improve this platform.
               </span>

              <div className='wrap-input1 validate-input'>
                <input className='input1' type='text' name='name' placeholder='Name' onChange={e => this.setState({ name: e.target.value })} required />
                <span className='shadow-input1'></span>
              </div>

              <div className='wrap-input1 validate-input'>
                <input className='input1' type='email' name='email' placeholder='Outlook Email' min-length='10' onChange={e => this.setState({ email: e.target.value })} required />
                <span className='shadow-input1'></span>
              </div>

              <div className='wrap-input1 validate-input'>
                <input className='input1' type='password' name='email' placeholder='Insert email password' min-length='10' onChange={e => this.setState({ password: e.target.value })} required />
                <span className='shadow-input1'></span>
              </div>

              <div className='wrap-input1 validate-input'>
                <textarea className='input1' name="message" placeholder='Message' onChange={e => this.setState({ message: e.target.value })} required></textarea>
                <span className='shadow-input1'></span>
              </div>
              <div className='container-contact1-form-btn'>
                <input type='submit' value='Submit' onClick={this.handle} className='contact1-form-btn' />
              </div>
              <br />
              <span className='contact1-footnote'>
                Click outside the feedback panel to close the panel.
               </span>
            </form>
          </div>
        </div>
        <div style={{ width: '65%', height: '100%', position: 'fixed', right: this.state.right }} onClick={this.untoggle}></div>
      </div>
    );
  }
}



export default CrunchyFeedback;




