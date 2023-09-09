import React, { useState } from 'react';

const Skills = () => {
  const skillSet = {
    TechnicalSkill: ["HTML", "CSS", "JavaScript", "ReactJS", "MongoDb", "NodeJS", "ExpressJS", "FireBase", "SQL"],
    SoftSkill: ["Communication", "TeamWork", "Leadership", "Adaptability", "Humanity", "Spirituality"],
    ProgrammingLanguages: ["JavaScript","Python", "Lua", "C", "C++"],
    LanguagesKnown: ["Tamil", "English"],
  };

  const [activeTab, setActiveTab] = useState('TechnicalSkill');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <section className='container skill' id='skills'>
      <h1 className='section-header'>SKILLS</h1>
      <div className='skill-tabs'>
        {Object.keys(skillSet).map((category, ind) => (
          <button
            key={ind}
            className={`skill-tab ${activeTab === category ? 'active' : ''}`}
            onMouseEnter={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='skill-list'>
        {skillSet[activeTab].map((skill, index) => (
          <p key={index} className='skill-item'>
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;