// App.js
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  });

  const handleFilterChange = event => {
    setState({ ...state, filter: event.target.value });
  };

  const handleAddContact = newContact => {
    setState({
      contacts: [...state.contacts, newContact],
      filter: '',
    });
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = state.contacts.filter(
      contact => contact.id !== contactId
    );
    setState({ ...state, contacts: updatedContacts });
  };

  // Filter contacts based on the search filter
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={state.filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
