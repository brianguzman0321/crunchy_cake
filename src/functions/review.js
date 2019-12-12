import '../App.css';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


class CrunchyReview extends React.Component {
  render() {
    return (
      <Link to='/show_feedback'>
       <OverlayTrigger
         key='left'
         placement='left'
         delay={{ show: 100, hide: 150 }}
         overlay={
           <Tooltip className='tooltip'>
             Click here to see feedbacks...
           </Tooltip>
         }
       >
         <img src = {require('../assets/feedback.svg')} id = 'review' alt = 'feedback'/>
       </OverlayTrigger>
      </Link>
    );
  }
}

export default CrunchyReview;



