import React from 'react';
import './TechStack.css';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaWordpress,
  FaPython,
  FaDatabase,
  FaMicrosoft,
  FaCode,
  FaServer,
  FaCloud,
  FaNetworkWired,
  FaSnowflake,
  FaFire,
  FaGlobe,
  FaHashtag,
  FaCodeBranch,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';

const TechStack = () => {
  const techItems = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'C#', icon: <FaHashtag className="csharp-icon" /> },
    { name: 'ASP.NET', icon: <FaGlobe /> },
    { name: 'Go', icon: <FaCodeBranch /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'SQL Server', icon: <FaDatabase /> },
    { name: 'Snowflake', icon: <FaSnowflake /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Azure', icon: <FaCloud /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'WordPress', icon: <FaWordpress /> },
  ];

  return (
    <section className="tech-stack container section" id="tech-stack">
      <h2 className="section__title">My Tech Stack</h2>

      <div className="tech-stack__container">
        {techItems.map((tech, index) => (
          <div className="tech-stack__item" key={index}>
            <div className="tech-stack__icon">{tech.icon}</div>
            <h3 className="tech-stack__name">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
