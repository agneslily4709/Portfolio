import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiMysql } from 'react-icons/si';

const Skills = () => {
        const TechnicalSkill = {
                "HTML": { proficiency: 90, color: "primary", icon: <FaHtml5 className='col-3'  size={32}/> },
                "CSS": { proficiency: 85, color: "secondary", icon: <FaCss3  className='col-3'  size={32}/> },
                "JavaScript": { proficiency: 95, color: "info", icon: <SiJavascript  className='col-3'  size={32}/> },
                "ReactJS": { proficiency: 80, color: "danger", icon: <FaReact  className='col-3' size={32}/> },
                "MongoDB": { proficiency: 75, color: "dark", icon: <SiMongodb   className='col-3' size={32}/> },
                "NodeJS": { proficiency: 85, color: "warning", icon: <FaNodeJs    className='col-3'size={32}/> },
                "ExpressJS": { proficiency: 80, color: "success", icon: <SiExpress className='col-3'  size={32}/> },
                "SQL": { proficiency: 90, color: "primary", icon: <SiMysql className='col-3' size={32}/> },
              };
        const SoftSkill = {  "Communication💬": { color: "primary" }, "Networking🌐": { color: "warning" }, "TeamWork🤝": { color: "secondary" },  "Collaboration👥":{color:"success"},"Leadership🚀": { color: "info" },  "Adaptability🦋": { color: "danger" },  "Humanity🌟": { color: "dark" },  "Spirituality🙏": { color: "warning" }}

  return (
    <section className='container skill' id='skills'>
      <h1 className='section-header'>SKILLS</h1>
      <div className='skill-tabs'>
        <div className='skill-category soft-skill'>
        <h3 className='text-center text-danger'>Soft Skill</h3>
        <ul className='list-group'>
        {Object.entries(SoftSkill).map(([skill, skillData], index) => (
                <li key={index} className={`list-group-item list-group-item-${skillData.color} mt-4 w-100 btn-lg`}>{skill}</li>
        ))}
        </ul>
        </div>
        <div className='skill-category tech-skill'>
                <h3 className='text-center text-danger'>Technical Skill</h3>
                {Object.entries(TechnicalSkill).map(([skill, skillData], index) => (
                <div key={index} className='mt-4 d-flex align-items-center row'>
                <p className='col-3'style={{color:"orangered"}}>{skill}</p>
                {skillData.icon}
                <div className='col-6'>
                        <div className='progress'>
                        <div
                        className={`progress-bar bg-${skillData.color}`}
                        role="progressbar"
                        style={{ width: `${skillData.proficiency}%` }}
                        aria-valuenow={skillData.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        {skillData.proficiency}%
                        </div>
                        </div>
                        </div>
                </div>
                ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;