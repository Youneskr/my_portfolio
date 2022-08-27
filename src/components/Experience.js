import React from 'react'
import { urlFor } from '../lib/connect'

const Experience = ({ top, setActiveItem, ispending , experienceData }) => {
    setActiveItem('experience')
    return (
        <div onLoad={top} className='experience'>
            <div class="container">
                <div class="timeline">
                { ispending &&  
                    <div class="timeline-row">
                        <div class="timeline-content">
                            <p class="m-0">Loading...</p>
                        </div>
                    </div> 
                }
                { experienceData &&
                    experienceData.map( data => (
                        <div class="timeline-row">
                            <div class="timeline-time">
                                { data.time_in } { data.time_out && <span>- { data.time_out }</span>  }
                                {/* <small>Dec 21</small> */}
                            </div>
                            <div class="timeline-content">
                                <i class="icon-attachment"></i>
                                <h5 className='mb-5'>{ data.name }</h5>
                                <p>{ data.description }</p>
                                <div class="thumbs">
                                    <img class="img-fluid rounded" src={ urlFor(data.img) } alt="Maxwell Admin" />
                                </div>
                            </div>
                        </div>
                    ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience