import React from 'react'
import {TbBrandLeetcode} from "react-icons/tb"
import {BsGithub} from "react-icons/bs"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {RxActivityLog} from "react-icons/rx"
import {PiCertificateFill} from "react-icons/pi"
const CodingProficiency = () => {
  return (
    <>
    <section className='container coding-container' id='coding'>
    <h1 className='section-header'>CODING PROFICIENCY</h1>
        <div className='coding-component mt-3 mb-3'>
        <div className='coding-component-1'>
        
        <div className="coding-profiles">
        <h3>Github</h3>
        <span>
                <a rel="noreferrer" href='https://github.com/AgnesLily2772' target='_blank'>
                <BsGithub size={100} color='navy'/>
                </a>
                </span>
        </div>
        <div className="coding-profiles">
                <h3>Leetcode</h3>
        <span><a rel="noreferrer" href='https://leetcode.com/agneslily4709/' target='_blank'><TbBrandLeetcode size={100} color='orange'/></a></span>
        </div>
        <div className="coding-profiles">
        <h3>Skillrack</h3>
        <span><a rel="noreferrer" href='https://www.skillrack.com/faces/resume.xhtml?id=323390&key=086113133b37ae72473f8fd6551b197684d627d1' target='_blank'><RxActivityLog size={100} color='gray'/></a></span>
        </div>
   </div>
  <div className='coding-component-2'>
  <div className="coding-profiles">
                <h3>Edureka</h3>
        <span><a rel="noreferrer" href='https://www.edureka.co/certificates/mycertificate/acec103303f8f3d6c9a90af01fa41256' target='_blank'><AiFillSafetyCertificate size={100}color='red'/></a></span>
        </div>
        <div className="coding-profiles">
                <h3>Guvi</h3>
        <span><a rel="noreferrer" href='https://www.guvi.in/verify-certificate?id=4W2L69yB81n2M8515E#' target='_blank'><PiCertificateFill size={100}color='green'/></a></span>
        </div>
        </div> 
        </div>
    </section>
    </>
  )
}

export default CodingProficiency