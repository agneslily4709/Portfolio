import React from 'react'
import {FaFileDownload} from 'react-icons/fa'
import pdfFile from '../Assets/AgnesLilyResume.pdf'

const Navbar = () => {
  return (
                <div className='navigation topBottom' id='home'>
                <nav className='navbar fixed-top navbar-expand-lg py-3 navbar-light' style={{ backgroundColor: "var(--navy-blue-color)" }}>
                <div className='container'>
                <a className="navbar-brand" style={{ color: "var(--alice-blue-color)" }} href='/'>AGNES LILY</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-light">↓↓↓</span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-light'>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#home'>Home</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#about'>About</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#skills'>Skills</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#blogs'>Blogs</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#projects'>Projects</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href='#contact'>Contact</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems m-1' href={pdfFile} download="AgnesLilyResume" target='_blank' style={{ color: "var(--poppy-red-color)" }}>Download   <FaFileDownload /></a></li>
                        </ul>
                </div>
                </div>
                </nav>
                </div>

  )
}

export default Navbar