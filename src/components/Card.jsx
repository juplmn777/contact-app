import React, { Fragment } from 'react';

export default function Card(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card-image px-5 py-5">
          <figure className="image is-256x256">
            <img src={props.img} alt="contact" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.img} alt="contact tmblr" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4 has-text-light">{props.name}</p>
              <p className="subtitle is-6 has-text-light">{props.mail}</p>
            </div>
          </div>
          <div className="content has-text-centered">
            <p className="title is-4 has-text-light">
              Tel: <span className="has-text-weight-light">{props.tel}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
