import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts: ' , error));

  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const updateContact = (id, updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts}
      updateContact={updateContact}
      deleteContact={deleteContact} />
    </div>
  );
}

export default App;