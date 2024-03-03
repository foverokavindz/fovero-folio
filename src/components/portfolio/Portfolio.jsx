import React, { useState } from 'react';
import './Portfolio.css';
import Work1 from '../../assets/work-1.svg';
import Work2 from '../../assets/work-2.svg';
import Work3 from '../../assets/work-3.svg';
import Work4 from '../../assets/work-4.svg';
import Work5 from '../../assets/work-5.svg';
import Work6 from '../../assets/work-6.svg';

const menuItem = [
  {
    id: 1,
    image: Work1,
    title: 'Project Management Illustration',
    category: 'Design',
  },
  {
    id: 2,
    image: Work2,
    title: 'Guest App Walkthrough Screens',
    category: 'Art',
  },
  {
    id: 3,
    image: Work3,
    title: 'Delivery App Wireframe',
    category: 'Branding',
  },
  ,
  {
    id: 4,
    image: Work4,
    title: 'Onboarding Motivation',
    category: 'Design',
  },
  ,
  {
    id: 5,
    image: Work5,
    title: 'iMac Mockup Design',
    category: 'Creative',
  },
  ,
  {
    id: 6,
    image: Work6,
    title: 'Game Store App Concept',
    category: 'Art',
  },
];

const Portfolio = () => {
  const [items, setItems] = useState(menuItem);

  const filterItems = (categoryItem) => {
    const UpdatedItems = menuItem.filter((curElm) => {
      return curElm.category === categoryItem;
    });

    setItems(UpdatedItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(menuItem)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItems('Creative')}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItems('Art')}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItems('Design')}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItems('Branding')}>
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category } = item;

          return (
            <div className="work__card fadeInUp" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
