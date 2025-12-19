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
				<div className="about__data">
					<div className="about__info">
						<p className="about__description">Hey! I'm Kavinda. I don't just write code; I design & build solutions that bridge the gap between complex logic and great design. My time in the industry has taught me that the best software isn't just 'fast'—it’s scalable and reliable.</p>

						<p
							className="about__description"
							style={{
								marginBottom: '1.5rem',
							}}
						>
							My goal is always the same: creating software that feels effortless for the user but is rock-solid on the backend, and I love every bit of the challenge. I'm a firm believer in continuous learning and always keeping a 'human-first' mindset in every line of code I write.
						</p>

						<a href="https://raw.githubusercontent.com/foverokavindz/fovero-folio/main/public/mycv.pdf" download="resume" className="btn">
							Download CV
						</a>
					</div>

					{/* <div className="about__skills grid">
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
					</div> */}
				</div>
			</div>

			<AboutBox />
		</section>
	);
};

export default About;
