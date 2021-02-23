import React, { Fragment } from 'react';

export default function Card(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.img} alt="contact"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.img} alt="contact tmblr"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">{props.mail}</p>
            </div>
          </div>
          <div className="content">
            <p className="title is-4">Tel: {props.tel}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
