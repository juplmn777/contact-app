import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from './components/Card';
import contacts from './components/contacts';

export default function App() {
  return (
    <div className="container pt-4">
      <h1 className="title is-1 has-text-centered">A Simple Contact App</h1>
      <div className="columns is-centered">
        <div className="column is-4">
          <Card
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            mail={contacts[0].email}
          />
        </div>
        <div className="column is-4">
          <Card
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            mail={contacts[1].email}
          />
        </div>
        <div className="column is-4">
          <Card
            name={contacts[2].name}
            img={contacts[2].imgURL}
            tel={contacts[2].phone}
            mail={contacts[2].email}
          />
        </div>
      </div>
    </div>
  );
}
