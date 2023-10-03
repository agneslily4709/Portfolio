import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import {BsMedium} from 'react-icons/bs'
import{BiLogoGmail} from "react-icons/bi"

const Footer = () => {

  return (
    <section className="footer">
    <footer className="py-1" style={{backgroundColor:"var(--navy-blue-color)"}}>
      <div className="container col item social "  style={{padding:"20px"}}>
        <div className='social-icons' style={{alignContent:"center",display:"flex",justifyContent:"center"}}>
        <a href='mailto:agneslily2772@gmail.com' target="_blank" rel='noopener noreferrer'><BiLogoGmail className='media-icons'  size="50px" color="red"/></a>
        <a href='//linkedin.com/in/agneslily' target="_blank" rel='noopener noreferrer'><FaLinkedin className='media-icons'  size="50px" color="skyblue"/></a>
        {/* <a href='//t.me/AgnesLily' target="_blank" rel='noopener noreferrer'><FaTelegram className='media-icons'  size="50px" color="lightgreen"/></a>
        <a href='https://wa.me/9150723391' target="_blank" rel='noopener noreferrer'><BsWhatsapp className='media-icons'  size="50px" color="pink"/></a> */}
        <a href='//agneslily2772.medium.com' target="_blank" rel='noopener noreferrer'><BsMedium className='media-icons'  size="50px" color="lightgreen"/></a>
        </div> 
        <div>
        <p className="text-center text-white mt-4">
          Copyright &copy; Agnes Lily 2023
        </p> 
        </div>
      </div>
    </footer>
  </section>
  )
}

export default Footer