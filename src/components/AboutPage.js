import React from 'react'
import Loading from './Loading'
import { urlFor } from '../lib/connect'

const AboutPage = ({ top, setActiveItem, aboutData , ispending }) => {
    setActiveItem('about')
    return (
        <div onLoad={top} className='page text-white py-5'>
            { ispending && <Loading /> }
            { aboutData &&  
                <div className="about-me py-5">
                    <div className='container'>
                        <div className="row align-items-center text-center text-md-start">
                            <div className="col-12 col-md-6">
                                <h2 className='display-2 fw-bold mb-4' style={{color: '#ef744b'}} >{ aboutData.title }</h2>
                                <div className="d-flex justify-content-center my-4">
                                    <img  width={300} className='img-fluid rounded-circle d-block d-md-none' src={urlFor(aboutData.img)} alt="" />
                                </div>
                                <p className='lead fs-4 fw-normal lh-lg'>{ aboutData.description }</p>
                            </div>
                            <div className="col-md-6 d-none d-md-block text-end">
                                <img  width={350} className='img-fluid rounded-circle' src={urlFor(aboutData.img)} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AboutPage