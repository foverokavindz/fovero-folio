import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/wp.png';
import WordpressLight from '../../assets/wp-light.png';
import { useTheme } from '../../context/theme';

const Services = () => {
	const { isDarkMode } = useTheme();
	const data = [
		{
			id: 2,
			image: Image2,
			title: 'Web Development',
			description: 'I build systems that are meant to last and scale. My industry experience taught me how to handle the heavy lifting—like architecting software, using patterns, best practices, and microservices, managing cloud infrastructure, and making sure APIs are rock-solid. I’m all about writing clean, reliable code that solves real problems without overcomplicating things.',
		},
		{
			id: 1,
			image: isDarkMode ? WordpressLight : Image3,
			title: 'Wordpress',
			description: 'I take WordPress and turn it into a professional, high-performance tool. Whether it’s a sleek blog or a full e-commerce engine, I focus on customization, security, and speed rather than just using a basic template. I use my engineering background to make sure your site is fast, reliable, and ready to grow as your needs change.',
		},
		{
			id: 3,
			image: Image1,
			title: 'UI/UX design',
			description: "I believe design is more than just making things look good; it’s about making them easy to navigate. I use Figma to bridge the gap between complex backend logic and a clean, intuitive user journey. I follow a 'human-first' approach to ensure that every interface I build feels natural and actually helps the user get things done.",
		},
		// {
		//   id: 4,
		//   image: Image1,
		//   title: 'UI/UX design',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
		// {
		//   id: 5,
		//   image: Image2,
		//   title: 'Web Development',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
		// {
		//   id: 6,
		//   image: Image3,
		//   title: 'Photography',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
	];

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services__container grid">
				{data.map((service) => (
					<div className="services__card" key={service.id}>
						<img src={service.image} alt="" className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
