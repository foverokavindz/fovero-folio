import React from 'react';

const aboutData = [
  { id: 1, icon: 'icon-fire', title: 50, subtitle: 'Projects completed' },
  { id: 2, icon: 'icon-cup', title: 10, subtitle: 'Cups of coffee' },
  { id: 3, icon: 'icon-people', title: 15, subtitle: 'Satisfied clients' },
  { id: 4, icon: 'icon-badge', title: '01', subtitle: 'Years of Experience' },
];

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      {aboutData.map((data) => (
        <div className="about__box" key={data.id}>
          <i className={`about__icon ${data.icon}`}></i>
          <div>
            <h3 className="about__title">{data.title}</h3>
            <span className="about__subtitle">{data.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
