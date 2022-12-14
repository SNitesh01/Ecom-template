import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const ItemCounter = ({ defVal = 0 }) => {
  const [value, setValue] = useState(parseInt(defVal, 10));

  const onInput = (event) => {
    setValue(event.target.value || 0);
  };

  const spinUp = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
  };

  const spinDown = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
  };

  return (
    <InputGroup className="spinner sw-11">
      <InputGroup.Text id="basic-addon1">
        <button type="button" className="spin-down single px-2" onClick={spinDown}>
          -
        </button>
      </InputGroup.Text>
      <Form.Control value={value} onInput={onInput} placeholder="Count" className="text-center" />
      <InputGroup.Text id="basic-addon2">
        <button type="button" className="spin-up single px-2" onClick={spinUp}>
          +
        </button>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default ItemCounter;
