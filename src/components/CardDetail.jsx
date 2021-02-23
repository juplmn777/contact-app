import React, { Fragment } from 'react';

export default function CardDetail(props) {
  return (
    <Fragment>
      <p className="subtitle is-6 has-text-light">{props.cardInfo}</p>
    </Fragment>
  );
}
