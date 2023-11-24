import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, editContact, deleteContact, addToFavorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedContacts = filteredContacts.sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

    if (sortOrder === 'asc') {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  const handleEdit = (index) => {
    editContact(index);
  };

  const handleDelete = (index) => {
    deleteContact(index);
  };

  const handleFavorites = (index) => {
    addToFavorites(index);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>
      <ul style={listStyle}>
        {sortedContacts.map((contact, index) => (
          <li key={index} style={itemStyle}>
            {contact.firstName} {contact.lastName} - {contact.phoneNumber} - {contact.category}
            <button style={buttonStyle} onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button style={buttonStyle} onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button style={buttonStyle} onClick={() => handleFavorites(index)}>
              Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
};

  
  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };
  
  const itemStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
  };
  
  const buttonStyle = {
    marginLeft: '8px',
    padding: '6px 12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  

export default ContactList;
