import React from 'react'
import { FaLinkedin,FaTelegram,FaGithub} from "react-icons/fa";
import {TbBrandLeetcode} from "react-icons/tb"
import {BsMedium} from 'react-icons/bs'
const Footer = () => {

  return (
    <section className="footer">
    <footer className="py-1" style={{backgroundColor:"var(--navy-blue-color)"}}>
      <div className="container col item social "  style={{padding:"20px"}}>
        <div className='social-icons' style={{alignContent:"center",display:"flex",justifyContent:"center"}}>
        <a href='//linkedin.com/in/agneslily' target="_blank" rel='noopener noreferrer'><FaLinkedin className='media-icons'  size="50px" color="skyblue"/></a>
        <a href='//t.me/AgnesLily' target="_blank" rel='noopener noreferrer'><FaTelegram className='media-icons'  size="50px" color="lightgreen"/></a>
        <a href='//github.com/AgnesLily2772' target="_blank" rel='noopener noreferrer'><FaGithub className='media-icons'  size="50px" color="lightpink"/></a> 
        <a href='//github.com/agneslily4709' target="_blank" rel='noopener noreferrer'><FaGithub className='media-icons'  size="50px" color="blue"/></a> 
        <a href='//leetcode.com/agneslily4709' target="_blank" rel='noopener noreferrer'><TbBrandLeetcode className='media-icons'  size="50px" color="orange"/></a> 
        <a href='//agneslily2772.medium.com' target="_blank" rel='noopener noreferrer'><BsMedium className='media-icons'  size="50px" color="lightslategray"/></a>
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