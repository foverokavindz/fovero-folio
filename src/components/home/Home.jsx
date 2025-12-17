import React from 'react';
import './Home.css';
import Me from '../../assets/myface.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="home__img-wrapper">
          <img src={Me} alt="" className="home__img" />
          <div className="home__img-decoration">
   
          </div>
        </div>
        <h1 className="home__name">Kavinda Weerasinghe</h1>
        <span className="home__education">Full-Stack Developer & UI Designer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Let's Talk
        </a>
      </div>
      <ScrollDown />
      <Shapes />
    </section>
  );
};

export default Home;
