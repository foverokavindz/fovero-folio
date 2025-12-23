import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
	{
		id: 1,
		category: 'education',
		icon: 'icon-graduation',
		year: '2021 - present',
		title: 'Bachelors of ICT in Software Technology',
		desc: (
			<span>
				University of Sri Jayewardenepura <br /> GPA - 3.55/4.00 <br /> (Secound Upper Class Honors)
			</span>
		),
	},
	{
		id: 2,
		category: 'education',
		icon: 'icon-graduation',
		year: '2023 - 2024',
		title: 'Diploma in Software Engineering',
		desc: (
			<span>
				Developers Stack Academy <br /> Tvec Approved
			</span>
		),
	},
	{
		id: 3,
		category: 'education',
		icon: 'icon-graduation',
		year: '2017 - 2019',
		title: 'GCE (AL) in Technology Stream',
		desc: (
			<span>
				Taxila Central College Horana <br /> 2As and B pass
			</span>
		),
	},
	{
		id: 4,
		category: 'experience',
		icon: 'icon-briefcase',
		year: '2025 May - Present',
		title: 'SE Intern @ Creative Software',
		desc: 'Experienced in developing automated web scraping systems and containerized microservices. My work centers on extending system capabilities, designing intuitive management UIs, and building robust APIs that bridge complex data with seamless user experiences.',
	},

	{
		id: 5,
		category: 'experience',
		icon: 'icon-briefcase',
		year: '2024 Jun - 2024 Dec',
		title: 'SE Intern @ Verdentra',
		desc: 'Experienced in developing and optimizing web applications, system workflows, and database migrations using modern technologies, with a strong focus on user experience, efficiency, and collaboration.',
	},
	{
		id: 6,
		category: 'experience',
		icon: 'icon-briefcase',
		year: '2023 - 2024',
		title: 'Web Designer @ Find X (lk)',
		desc: 'Designed and built user-friendly websites, and landing pages using WordPress and Elementor.',
	},
];

const Resume = () => {
	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">Experience</h2>

			<div className="resume__container grid">
				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'education' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>

				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'experience' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>
			</div>
		</section>
	);
};

export default Resume;
