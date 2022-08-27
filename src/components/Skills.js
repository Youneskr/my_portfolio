import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import SingleSkill from './SingleSkill'

const Skills = ({ skillsData, ispending }) => {
    return (
        <>
        { ispending && <Loading /> }
        { skillsData &&
            <div className='py-5'>
                <h2 className='display-3 fw-bold mb-5 text-center' style={{color: '#ef744b'}}>Skills</h2>
                <div className="container">
                    { skillsData.map( (skill, index) =>  index in ['0','1','3'] ? <SingleSkill key={skill.slug} skill={skill} /> : ''  ) }
                    <div className="d-flex justify-content-center">
                        <Link to={'/skills'} className="btn btn-lg skills-btn rounded-pill">See All</Link>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Skills