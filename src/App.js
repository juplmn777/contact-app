import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from './components/Card';
import contacts from './components/contacts'

export default function App() {
  return (
    <div className="container pt-6 pb-6">
      <div className="columns is-centered">
        <div className="column is-4">
          <Card 
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            mail={contacts[0].email}
          />
        </div>
      </div>
    </div>
  );
}
