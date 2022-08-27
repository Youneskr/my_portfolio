import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from './Skills'
import Loading from './Loading'

const Home = ({ setActiveItem, heroData, aboutData, projectsData, skillsData, links, ispending }) => {
    setActiveItem('home')
    return (
        <>
            { ispending && <Loading /> }
            { heroData && <Hero links={links} heroData={heroData} /> }
            { aboutData && <AboutMe aboutData={aboutData} /> }
            { skillsData && <Skills skillsData={skillsData} />}
            { projectsData && <Projects projectsData={projectsData} /> }    
        </>
    )
}

export default Home