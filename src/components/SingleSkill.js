import React from 'react' 
import { Link } from 'react-router-dom'
import { urlFor } from '../lib/connect'

const SingleSkill = ({ skill : { name, slug, img, description } }) => {
    return (
        <div className="skill my-5 py-1 d-flex align-items-center" >
            <img src={ urlFor(img) } width={150}  className="rounded-pill p-4" alt="..." />
            <div className="text">
                <h3>{ name }</h3>
                <p className='lead d-none d-md-block'>{ description } </p>

            </div>
        </div>
    )
}   

export default SingleSkill