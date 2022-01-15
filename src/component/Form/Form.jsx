import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Button } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputHandler = ({ target }) => {
    const { value, name } = target;

    setName({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const singleContact = {
      name: name,
      number: number,
      id: nanoid(4),
    };
    this.props.addToPhonebook(singleContact);
    reset();
  };
  const reset = () => {
    setName({ name: '' });
    setNumber({ number: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label>
          <input
            onChange={inputHandler}
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
          ></input>
        </Label>
        <Label>
          <input
            onChange={inputHandler}
            type="tel"
            name="number"
            placeholder="Enter number..."
            value={number}
          ></input>
        </Label>

        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
}
Form.propTypes = {
  addToPhonebook: PropTypes.func.isRequired,
};
