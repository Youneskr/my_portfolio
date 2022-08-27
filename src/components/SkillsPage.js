import React from 'react'
import Loading from './Loading'
import SingleSkill from './SingleSkill'

const SkillsPage = ({ top, setActiveItem, skillsData, ispending }) => {
    setActiveItem('skills')
    
    return (
        <>
        { ispending && <Loading /> }
        { skillsData &&
            <div onLoad={top} className='py-5 page'>
                <div className="container text-white">
                    { skillsData.map( skill => <SingleSkill key={skill.slug} skill={skill} /> ) }
                </div>
            </div>
        }
        </>
    )
}

export default SkillsPage