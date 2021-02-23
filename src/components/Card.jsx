import React, { Fragment } from 'react';
import Avatar from './Avatar';
import CardDetail from './CardDetail';
import ContactName from './ContactName';
import TinyAvatar from './TinyAvatar';

export default function Card(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card-image px-5 py-5">
          <Avatar img={props.img} />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <TinyAvatar img={props.img} />
            </div>
            <div className="media-content">
              <ContactName contactName={props.name} />
            </div>
          </div>
          <div className="content has-text-left">
            <CardDetail cardInfo={props.mail} />
            <CardDetail cardInfo={props.tel} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
