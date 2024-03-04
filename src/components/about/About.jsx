import React from 'react';
import './About.css';
import logo from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';
import Resume from '../../assets/mycv.pdf';

const skillsList = [
  {
    id: 1,
    name: 'Development',
    class: 'development',
    number: '90%',
  },
  { id: 2, name: 'UI/UX design', class: 'ui__design', number: '80%' },
  { id: 3, name: 'Photography', class: 'photography', number: '60%' },
];

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={logo} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Kavinda Madurnaga, web developer from Horana, Sri Lanka. I
              have rich experience in web site design and building and
              customization, also I am good at WordPress.
            </p>
            <a href={Resume} download="resume" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            {skillsList.map((skill) => (
              <div className="skills__data" key={skill.id}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.number}</span>
                </div>

                <div className="skills__bar">
                  <span className={`skills__percentage ${skill.class}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
