import '../App.css';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class CrunchyBaby extends React.Component {

  render() {
    return (
      <OverlayTrigger
        key='top'
        placement='top'
        delay={{ show: 100, hide: 150 }}
        overlay={
          <Tooltip className='tooltip'>
            New Page...Coming soon. Related page to be built soon.
          </Tooltip>
        }
      >
        <div className='myhotspot' id='baby' ></div>
      </OverlayTrigger>
    );
  }
}

export default CrunchyBaby;