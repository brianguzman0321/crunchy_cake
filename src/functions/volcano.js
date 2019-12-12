import '../App.css';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class CrunchyVolcano extends React.Component {
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
        <div className='myhotspot' id='volcano'></div>
      </OverlayTrigger>
    );
  }
}

export default CrunchyVolcano;