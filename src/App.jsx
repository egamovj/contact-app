import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const addToFavorites = (index) => {
    const selectedContact = contacts[index];
    setFavorites([...favorites, selectedContact]);
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={headerStyle}>Contact Manager</h1>
      <div style={appContentStyle}>
        <div style={formContainerStyle}>
          <h2 style={formHeaderStyle}>Add Contact</h2>
          <ContactForm addContact={addContact} />
        </div>
        <div style={listContainerStyle}>
          <h2 style={listHeaderStyle}>Contact List</h2>
          <ContactList
            contacts={contacts}
            editContact={editContact}
            deleteContact={deleteContact}
            addToFavorites={addToFavorites}
          />
          <h2 style={listHeaderStyle}>Favorites</h2>
          <ContactList contacts={favorites} deleteContact={() => {}} addToFavorites={() => {}} />
        </div>
      </div>
    </div>
  );
};

const appContainerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const headerStyle = {
  color: '#333',
};

const appContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const formContainerStyle = {
  flex: '1',
  marginRight: '20px',
};

const formHeaderStyle = {
  color: '#555',
};

const listContainerStyle = {
  flex: '1',
};

const listHeaderStyle = {
  color: '#555',
};

export default App;
