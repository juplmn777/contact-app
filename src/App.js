import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from './components/Card';
import contacts from './components/contacts';

const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      contactId={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    />
  );
};

export default function App() {
  return (
    <div className="container pt-4">
      <h1 className="title is-1 has-text-centered">A Simple Contact App</h1>
      <div className="columns is-centered">{contacts.map(createCard)}</div>
    </div>
  );
}
