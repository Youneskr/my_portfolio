import React from 'react'
import Loading from './Loading'
import { urlFor } from '../lib/connect'
import { Link } from 'react-router-dom'
const Projects = ({ top, setActiveItem, projectsData, ispending }) => {
    
    const active = () => {
        setActiveItem("projects")
        top()
    }
    return (
        <div onLoad={active}>
            { ispending && <Loading /> }
            { projectsData &&  
                <div className="page">
                    <div className='project container py-5 text-center'>
                        <div class="d-flex flex-wrap justify-content-around text-white">
                            { projectsData.map( (item, index) =>  (
                                <a href={`${item.url}`} style={{textDecoration : 'none', color : 'white'}} target='_blank'>
                                    <div className="card m-2" style={{width: '18rem', backgroundColor : '#1a233a', boxShadow: 'none', border : '2px solid #777', }}>
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
                            ) ) }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Projects