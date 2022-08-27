import { client } from './lib/connect'
import { useState, useEffect } from 'react'

export const useFetch = () => {
    const [heroData, setHeroData] = useState(null)
    const [aboutData, setAboutData] = useState(null)
    const [projectsData, setProjectsData] = useState(null)
    const [skillsData, setSkillsData] = useState(null)
    const [experienceData, setExperienceData] = useState(null)
    const [ispending, setIspending] = useState(true)
    const [links, setLinks] = useState(null)

            useEffect(() => {
                client.fetch('*[_type=="hero"]')
                .then ( res => {
                    setHeroData(res[0])
                    setIspending(false)
                } )

                client.fetch('*[_type=="about"]{title, description, "img": image.asset->url}')
                .then ( res => {
                    setAboutData(res[0])
                    setIspending(false)
                } )

                client.fetch('*[_type=="projects"]{title, description, url,"img": image.asset->url}')
                .then ( res => {
                    setProjectsData(res)
                    setIspending(false)
                } )

                client.fetch('*[_type=="skills"]{name, description, "slug" : slug.current ,"img": image.asset->url}')
                .then ( res => {
                    setSkillsData(res)
                    setIspending(false)
                } )

                client.fetch('*[_type=="experience"]{name, time_in, time_out, description, "img":image.asset->url}')
                .then ( res => {
                    setExperienceData(res)
                    setIspending(false)
                } )

                client.fetch('*[_type=="links"]{facebook, instagram, linkedin, cv, email}')
                .then ( res => {
                    setLinks(res[0])
                    setIspending(false)
                } )
            }, [])
            return { heroData, aboutData, projectsData, skillsData, experienceData, ispending, links }
}
