import React from 'react'

const Footer = ({ ispending, links }) => {
    return (
        <>
        { !ispending && 
            <footer className='py-4 d-flex text-white justify-content-center text-center'>
                <div>
                    <h2>Contact me</h2>
                    <h3 className='mb-4'>{ links ? links.email : '' }</h3>
                    <p className="lead fs-6 mb-0">Copyright © 2022 Younes Korbi</p>
                </div>
            </footer>
        }
        </>
        
    )
}

export default Footer