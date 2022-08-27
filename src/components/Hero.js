import React from 'react'
import { SiFacebook } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Hero = ({ heroData, links }) => {
    return (
        <div className='hero text-white d-flex align-items-center'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="hero-text">
                    <h1 className='display-1 pb-3 fw-normal' style={{color: '#ef744b'}} >{ heroData ? heroData.title1 : 'Younes' }</h1>
                    <p className='display-6 pb-2 lead'>{ heroData ? heroData.title2 : 'Younes' }</p>
                    <a href={links ? links.cv : ''} target='_blank' className="btn  btn-light bg-light" style={{color: '#ef744b'}}>Get my CV</a>
                </div>
                <div className="hero-social-media d-flex flex-column">
                    <a className='text-white' target='_blank' href={links ? links.linkedin :''}>
                        <FaLinkedinIn  size={40} className='mb-4'/>
                    </a> 
                    <a className='text-white' target='_blank' href={links ? links.instagram :''}>
                        <AiOutlineInstagram size={40} className='mb-4' />
                    </a> 
                    <a className='text-white' target='_blank' href={links ? links.facebook :''}>
                        <SiFacebook size={40}/>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Hero