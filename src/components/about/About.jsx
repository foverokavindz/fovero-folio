import React from 'react';
import './About.css';
import logo from '../../assets/me.jpg';
import AboutBox from './AboutBox';

const skillsList = [
  {
    id: 1,
    name: 'Development',
    class: 'development',
    number: '90%',
  },
  { id: 2, name: 'UI/UX design', class: 'ui__design', number: '70%' },
  { id: 3, name: 'Wordpress', class: 'wordpress', number: '80%' },
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
              Hey, I'm Kavinda Madurnaga, web developer from Sri Lanka. I have
              rich experience in web design and building and customization, also
              I am good at UI/UX.
            </p>
            <a
              href="https://raw.githubusercontent.com/foverokavindz/fovero-folio/main/public/mycv.pdf"
              download="resume"
              className="btn"
            >
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
