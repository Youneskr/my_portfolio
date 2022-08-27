import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Navbar from './components/Navbar'
    import Home from './components/Home'
    import AboutPage from './components/AboutPage'
    import Experience from './components/Experience'
    import SkillsPage from './components/SkillsPage'
    import ProjectsPage from './components/ProjectsPage'
    import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetch } from './useFetch'
import { useState } from 'react'

const App = () => {
  const { heroData, aboutData, projectsData, ispending, skillsData, experienceData, links } = useFetch()
  const [activeItem, setActiveItem] = useState('home')
  const top = () => { window.scrollTo(0, 0) }



  return (
    <BrowserRouter>
          <Navbar activeItem={activeItem} ispending={ispending} />
              <div style={{paddingTop : '56px'}}>
                  <Routes>
                      <Route path="/" element={<Home setActiveItem={setActiveItem} links={links} heroData={heroData} aboutData={aboutData} projectsData={projectsData} skillsData={skillsData} ispending={ispending} />} />
                      
                      <Route path="/about" element={<AboutPage top={top} setActiveItem={setActiveItem} aboutData={aboutData} ispending={ispending} />} />
                      
                      <Route path="/skills" element={<SkillsPage top={top} setActiveItem={setActiveItem} ispending={ispending} skillsData={skillsData} />} />
                      
                      <Route path="/experience" element={<Experience top={top} setActiveItem={setActiveItem} experienceData={experienceData} ispending={ispending} />} />
                      
                      <Route path="/projects" element={<ProjectsPage top={top} setActiveItem={setActiveItem} projectsData={projectsData} ispending={ispending} />} />
                      
                      <Route path="/contact" element={<Contact top={top} setActiveItem={setActiveItem} />} />
                  </Routes>
              </div>
          <Footer links={links} ispending={ispending} />
    </BrowserRouter>
  )
}

export default App