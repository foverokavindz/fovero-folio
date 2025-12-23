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
				<div className="about__image__Wrapper">
					<img src={logo} alt="" className="about__img" />
					<a href="https://raw.githubusercontent.com/foverokavindz/fovero-folio/main/public/mycv.pdf" download="resume" className="btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '15px' }}>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						Download CV
					</a>
				</div>

				<div className="about__data grid">
					<div className="about__info">
						<p className="about__description">Hey! I'm Kavinda. I don't just write code; I design & build solutions that bridge the gap between complex logic and great design. My time in the industry has taught me that the best software isn't just 'fast'—it’s scalable and reliable.</p>

						<p className="about__description">My goal is always the same: creating software that feels effortless for the user but is rock-solid on the backend, and I love every bit of the challenge. I'm a firm believer in continuous learning and always keeping a 'human-first' mindset in every line of code I write.</p>

						<div className="about__expertise">
							<h4 className="about__expertise-title">Expertise Areas</h4>
							<div className="about__expertise-list">
								<span className="expertise-badge">Computer Programming</span>
								<span className="expertise-badge">UI/UX Design</span>
								<span className="expertise-badge">Problem Solving</span>
								<span className="expertise-badge">API Design & Development</span>
								<span className="expertise-badge">Cloud & DevOps</span>
								<span className="expertise-badge">AI & Automation</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutBox />
		</section>
	);
};

export default About;
