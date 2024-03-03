import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
  {
    id: 1,
    category: 'education',
    icon: 'icon-graduation',
    year: '2019 - present',
    title: 'Academic Degree',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 2,
    category: 'education',
    icon: 'icon-graduation',
    year: '2013 - 2017',
    title: "Bachelor's Degree",
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 3,
    category: 'education',
    icon: 'icon-graduation',
    year: '2009 - 2013',
    title: 'Honours Degree',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 4,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2019 - present',
    title: 'Web Designer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 5,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2013 - 2017',
    title: 'Front-End Developer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
  {
    id: 6,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2009 - 2013',
    title: 'Back-End Developer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.',
  },
];

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {expData.map(
            (exp, index) =>
              exp.category === 'education' && (
                <Card
                  key={index}
                  icon={exp.icon}
                  title={exp.title}
                  year={exp.year}
                  desc={exp.desc}
                />
              )
          )}
        </div>

        <div className="timeline grid">
          {expData.map(
            (exp, index) =>
              exp.category === 'experience' && (
                <Card
                  key={index}
                  icon={exp.icon}
                  title={exp.title}
                  year={exp.year}
                  desc={exp.desc}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
