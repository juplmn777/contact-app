import React, {Fragment} from 'react'

export default function ContactName(props) {
    return (
        <Fragment>
            <p className="title is-4 has-text-light contact-name">{props.contactName}</p>
        </Fragment>
    )
}
