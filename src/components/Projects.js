import React from 'react'
import Loading from './Loading'
import Project from './Project'

const Projects = ({ top, setActiveItem, projectsData, ispending }) => {
    
    const active = () => {
        setActiveItem("projects")
        top()
    }
    return (
        <div onLoad={active}>
            { ispending && <Loading /> }
            { projectsData &&  
                    <div className='project container py-5 text-center'>
                        <h2 className='display-3 fw-bold mb-5 text-center' style={{color: '#ef744b'}}>Projects</h2>
                        <div class="d-flex flex-wrap justify-content-around ">
                            { projectsData.map( (item, index) =>  <Project key={index} item={item} /> ) }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Projects