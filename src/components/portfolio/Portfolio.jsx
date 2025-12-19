import { useState } from 'react';
import './Portfolio.css';
import lilac from '../../assets/lilac.png';
import musicmuse from '../../assets/musicmuse.png';
import posImage from '../../assets/pos.png';
import galaxyImage from '../../assets/galaxy.png';
import ragImage from '../../assets/rag.jpg';
import talk from '../../assets/talk.png';
import attireAvenue from '../../assets/attireAvenue.png';

const categories = {
	WEB: 'WEB',
	DESKTOP: 'DESKTOP',
	FIGMA: 'FIGMA',
	WORDPRESS: 'WORDPRESS',
	RESEARCH: 'RESEARCH',
};

const menuItem = [
	{
		id: 7,
		image: ragImage,
		title: 'Knowledge graph + RAG System (Research AI Project)',
		category: categories.RESEARCH,
		link: 'https://github.com/orgs/NDK-Research-AI-Project/repositories',
	},
	{
		id: 1,
		image: posImage,
		title: 'POS WARE - Point of Sale',
		category: categories.DESKTOP,
		link: 'https://github.com/foverokavindz/TeamElitePOS',
	},
	{
		id: 2,
		image: lilac,
		title: 'Lilac E-Commerce Store',
		category: categories.WEB,
		link: 'https://linktr.ee/foveromw',
	},
	{
		id: 3,
		image: musicmuse,
		title: 'Music Muse - Emotion base music player',
		category: categories.WEB,
		link: 'https://github.com/Mu-me/Music-Muse',
	},
	,
	{
		id: 4,
		image: attireAvenue,
		title: 'Attire Avenue',
		category: categories.WEB,
		link: 'https://github.com/Attire-Avenue-Online-Store',
	},
	,
	{
		id: 5,
		image: talk,
		title: '.Talk - Chat App',
		category: categories.WEB,
		link: 'https://github.com/foverokavindz/chat-app-1',
	},
	,
	{
		id: 6,
		image: galaxyImage,
		title: 'Virtual Galaxy Explorer',
		category: categories.FIGMA,
		link: 'https://www.figma.com/file/LdoZU1FAYTeyVKvDXhHboo/Virtual-Galaxy-Explorer-(Community)?type=design&node-id=0-1&mode=design&t=u9FRpvMw0LcYOf4K-0',
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
				<span className="work__item" onClick={() => filterItems(categories.WEB)}>
					Web Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.DESKTOP)}>
					Desktop Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.FIGMA)}>
					Figma Design
				</span>
				<span className="work__item" onClick={() => filterItems(categories.WORDPRESS)}>
					Wordpress
				</span>
				<span className="work__item" onClick={() => filterItems(categories.RESEARCH)}>
					Research
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
							<a href={item.link} className="work__button" target="_blank">
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
