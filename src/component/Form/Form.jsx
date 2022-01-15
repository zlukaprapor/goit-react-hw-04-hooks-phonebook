import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Button } from './Form.styled';

export default function Form({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const onChangeTel = (e) => {
    setNumber(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label>
          <input
            onChange={onChangeName}
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. for instance Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan...."
            required
          ></input>
        </Label>
        <Label>
          <input
            onChange={onChangeTel}
            type="tel"
            name="number"
            placeholder="Enter number..."
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must consist of numbers and can take place for CDs, tires, parentheses and can start with +"
            required
          ></input>
        </Label>

        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
