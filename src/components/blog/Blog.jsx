import React from 'react';
import './Blog.css';
import messageQueue from '../../assets/messageQueue.png';
import kubernetes from '../../assets/kubernetes.png';

const blogData = [
	{
		id: 1,
		category: 'Explainer + Tutorial',
		title: 'What Are Message Queues? Why Does It Matter?',
		metaTag: '01 September, 2025',
		author: 'Kavinda',
		image: messageQueue,
		url: 'https://medium.com/@kavindamadhuranga74/what-are-message-queues-why-does-it-matter-4c016e95a8f8',
	},
	{
		id: 2,
		category: 'Explainer + Tutorial',
		title: 'From Zero to Kubernetes: Building Your First Self-Managed Cluster (Complete Guide)',
		metaTag: 'Comming Soon',
		author: 'Kavinda',
		image: kubernetes,
		url: '',
	},
];

const Blog = () => {
	return (
		<section className="blog container section" id="blog">
			<h2 className="section__title">Latest Posts</h2>

			<div className="blog__container grid">
				{blogData.map(({ id, category, title, metaTag, author, image, url }) => {
					return (
						<div className="blog__card" key={id}>
							<a href={url} className="blog__category-link" target="_blank">
								<span className="blog__category">{category}</span>
							</a>
							<div className="blog__thumb">
								<a href={url} target="_blank">
									<img src={image} className="blog__img" />
								</a>
							</div>
							<div className="blog__details">
								<h3 className="blog__title">{title}</h3>

								<div className="blog__meta">
									<span>{metaTag}</span>
									<span className="blog__dot">.</span>
									<span>{author}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Blog;
