import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some((i) => i.name === name)
      ? toast.error(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const inputHandler = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmitForm={onSubmitForm} />
      <h2>Contacts</h2>
      <Filter filter={filter} inputHandler={inputHandler} />
      <ContactList
        filteredContacts={filteredContacts()}
        deleteContact={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
