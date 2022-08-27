import React from 'react'
import { Link } from 'react-router-dom'

import { urlFor } from '../lib/connect'

const Project = ({ item }) => {
    return (
        <a href={`${item.url}`} target='_blank' style={{textDecoration : 'none', color : 'black'}}>
            <div className="card m-2" style={{width: '18rem'}}>
                <img src={urlFor(item.img)}  className="rounded-circle p-4 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{ item.title }</h5>
                    <p className="card-text lead fs-6">{ item.description }</p>
                    <hr />
                    <a id='card-link' 
                        style={{ textDecoration: 'none', color: '#ef744b' }} 
                        href={`${item.url}`} target='_blank'>
                        View here
                    </a>
                </div>
            </div>
        </a>
    )
}

export default Project