import React from 'react';
import './Home.css';
import Me from '../../assets/myface.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import TextType from '../../animations/textType/TextType';

const Home = () => {
	return (
		<section className="home container" id="home">
			<div className="intro">
				<div className="home__img-wrapper">
					<img src={Me} alt="" className="home__img" />
					<div className="home__img-decoration"></div>
				</div>
				<h1 className="home__name">Kavinda Weerasinghe</h1>
				<span className="home__education">Full-Stack Engineer & Designer</span>
				<div className="memphis-bg-texttype">
					<TextType text={['Crafting Code & Shaping Solution', 'Code Artist + Problem Solver', 'Simplifying Complexity + Enhancing Experience']} typingSpeed={75} pauseDuration={2000} showCursor={true} cursorCharacter="●" />
				</div>
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
