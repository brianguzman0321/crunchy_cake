import '../App.css';
import React from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import wine7 from './bottles/7.png';

class CrunchyBottle extends React.Component {
  render() {
    return (
      <OverlayTrigger
      key = 'right'
      placement = 'right'
      delay = {{ show:100, hide:150 }}
      overlay = {
       
          <table style={{height: '200px', width: '400px', opacity: '0.9'}}>
            <tr >
              <td style={{backgroundColor: '#804000', backgroundImage: 'linear-gradient(to bottom right, #804000, #cc9900)'}}><img src={wine7}  style={{width:'60px', height: '150px'}}/></td>
              <td style={{backgroundColor: '#e0e0d1', backgroundImage: 'linear-gradient(to bottom left, #b7b795, #e0e0d1)'}}><p style={{color: 'black'}}>This is the best wine in the world. We have so many consumers on the earth. I think this is the best world wine in the world I have ever had. Please enjoy them.</p></td>
            </tr>
          </table>
       
      }
      >
        <div className = 'myhotspot' id='bottle'></div>
      </OverlayTrigger>
    );
  }
}


export default CrunchyBottle;