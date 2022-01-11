import React, { Component } from 'react';
import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  addToPhonebook = (newContact) => {
    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState((prev) => ({
          contacts: [...prev.contacts, newContact],
        }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const insensitiveValue = filter.toLowerCase();
    if (filter.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(insensitiveValue)
      );
    } else {
      return contacts;
    }
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form addToPhonebook={this.addToPhonebook} />
        <h2>Contacts</h2>
        <Filter filter={filter} inputHandler={this.inputHandler} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
