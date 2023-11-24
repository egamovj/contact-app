import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    category: 'Family',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
      alert('Please fill in all fields');
      return;
    }
    addContact(formData);
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      category: 'Family',
    });
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        First Name:
        <input
          style={inputStyle}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label style={labelStyle}>
        Last Name:
        <input
          style={inputStyle}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label style={labelStyle}>
        Phone Number:
        <input
          style={inputStyle}
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label style={labelStyle}>
        Category:
        <select
          style={inputStyle}
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Relatives">Relatives</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <button style={buttonStyle} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
  };

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
};

const labelStyle = {
  display: 'flex',
  margin: '8px 0',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '8px',
  margin: '4px 0',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ContactForm;
