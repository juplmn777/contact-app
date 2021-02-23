import React from 'react'

export default function Avatar(props) {
    return (
        <div>
            <figure className="image is-256x256">
            <img src={props.img} alt="contact" />
          </figure>
        </div>
    )
}
