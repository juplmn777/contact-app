import React, {Fragment} from 'react'

export default function TinyAvatar(props) {
    return (
        <Fragment>
            <figure className="image is-48x48">
                <img src={props.img} alt="contact tmblr" />
              </figure>
        </Fragment>
    )
}
