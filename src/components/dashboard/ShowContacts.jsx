import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';

const ShowContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await apiClient.get('contact-messages/');
        setContacts(res.data);
      } catch (err) {
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowContacts;
