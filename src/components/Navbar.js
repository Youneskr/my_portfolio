import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({  activeItem, ispending }) => {
    const show = () => {
        const nav = document.querySelector('.navbar-collapse')
        nav.classList.remove("show")
    }

    return (
        <>
        { !ispending && 
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to=""></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu size={30} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem === 'home' ? 'nav-link px-4 active' : 'nav-link px-4'} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem==='about' ? 'nav-link px-4 active' : 'nav-link px-4'} to="/about">About</Link>
                        </li>
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem==='experience' ? 'nav-link px-4 active' : 'nav-link px-4'} to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem==='skills' ? 'nav-link px-4 active' : 'nav-link px-4'} to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem==='projects' ? 'nav-link px-4 active' : 'nav-link px-4'} to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item ">
                            <Link onClick={show} className={activeItem==='contact' ? 'nav-link px-4 active' : 'nav-link px-4'} to="contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        }
        </>
    )
}

export default Navbar