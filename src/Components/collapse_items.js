import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (props) => setIsOpen(!isOpen);


  return (
    <div id ="items_container">
      <Button id = "button_flight" color="mute" onClick={toggle} style={{ marginBottom: '1rem' }}><span>{props.question}</span></Button>
      <Collapse isOpen={isOpen} id="collapse_container">
        <Card>
          <CardBody>
          {props.answer}
          </CardBody>
        </Card>
      </Collapse>

      <div id="blank"></div>
    </div>
  );
}

export default Item;