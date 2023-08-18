import React from 'react';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const handleDelete = async (id) => {
    // Simulating a DELETE request (dummy request)
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });

    // Remove the contact from the local state
    deleteContact(id);
  };
  const handleUpdate = async (id, updatedContact) => {
    //Simulating a PUT request (dummy request)
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: 'PUT' ,
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedContact)
    });

    //Update the contact in the local state
    updateContact(id, updatedContact);
  };
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleUpdate(contact.id, { ...contact, name: 'Updated Name'})}>Update</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
