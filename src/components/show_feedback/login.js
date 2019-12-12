import React from 'react';
import Button from 'react-bootstrap/Button';
import { Table, Form, InputGroup, Modal } from 'react-bootstrap';
import './style.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalshow: true,
      email: '',
      password: '',
      buttonstyle: 'primary',
      buttontext: 'OK',
      text: 'For checking feedbacks, you should put correct private information.',
      textcolor: 'blue',
      myarray: []
    }
  this.buttonfunction = this.buttonfunction.bind(this);
  this.changetext = this.changetext.bind(this);
  this.getdata = this.getdata.bind(this);
   }
  
  changetext = () => {
    this.setState({
      textcolor: 'blue',
      text: 'For checking feedbacks, you should put correct private information.',
      buttonstyle: 'primary',
      buttontext: 'OK'
    });
  }

  buttonfunction = () => {
    if(this.state.email === 'd1k.chesho.god@gmail.com' && this.state.password === 'freeandfair') {
      this.setState({ modalshow: false });
      this.getdata();
   }
   else {
    this.setState({ 
      text: ' Invalid information. Insert Again! ',
      textcolor: 'red',
      buttonstyle: 'danger',
      buttontext: 'False!'   
    });
    setTimeout( this.changetext, 2000);
  }
  }
  
  getdata = async () => {
    await fetch('http://localhost:2000/feedback/crunchy_cake', {
      method: 'GET'
    }).then(res=>res.text())
    .then(result=> JSON.parse(result))
    .then(result=> {
      this.setState({ myarray: result});
    })
    .catch(err => alert(`Error: ${err}`));
  }

 
  render() {
    return(
      <>
      <Modal
    show = { this.state.modalshow }
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header  className = 'mymodal' >
      <Modal.Title className= 'mymodal' id="contained-modal-title-vcenter">
        Login
      </Modal.Title>
    </Modal.Header>
    <Modal.Body  className = 'mymodal'>
         <p style = {{color: this.state.textcolor}}>{ this.state.text }</p>
         <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                 placeholder="Insert your Email address"
                 type = "email"
                 onChange = {e=> this.setState({ email: e.target.value })}
                 required
             />
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                 placeholder="Insert your Password"
                 type = "password"
                 onChange = {e=> this.setState({ password: e.target.value })}
                 required
             />
         </InputGroup>
    </Modal.Body>
    <Modal.Footer  className = 'mymodal'>
    <Button type='submit' variant={ this.state.buttonstyle } onClick = { this.buttonfunction }>{ this.state.buttontext }</Button>
    </Modal.Footer>
  </Modal>
  
  <Table id='table1' striped bordered hover variant='dark'>
    <thead >
    <tr>
      <th className='no'>NO</th>
      <th className='name'>Name</th>
      <th className='email'>Email Address</th>
      <th className='message'>Message</th>
    </tr>
    </thead>
    <tbody >
     {
        this.state.myarray.map(element =>
          <tr>
            <td className='no'>{element.id}</td>
            <td className='name'>{element.name}</td>
            <td className='email'>{element.email}</td>
            <td className='message'>{element.message}</td>
          </tr>
        )        
     }
     </tbody>
  </Table>
  <Table id='table2' striped bordered hover variant='dark'>
    <thead >
    <tr>
      <th className='no'>NO</th>
      <th className='name'>Name</th>
      <th className='email'>Email Address</th>
      <th className='message'>Message</th>
    </tr>
    </thead>
  </Table>
  </>
    );
  }
}

export default Login;