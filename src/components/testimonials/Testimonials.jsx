import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-3.svg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
	{
		id: 1,
		image: Image1,
		title: 'David Brown',
		subtitle: 'A imagine designer at mind',
		comment: 'Not only did they deliver a stunning website, but their attention to UI/UX details truly enhanced the user experience. Highly recommend!',
	},
	{
		id: 2,
		image: Image2,
		title: 'Taylor Swift',
		subtitle: 'Virtual Product designer at Nowhere',
		comment: 'I enjoy working with the theme and learn so much. attention to detail and commitment to delivering quality work is commendable',
	},
];

const Testimonials = () => {
	return (
		<section className="testionials container section" id="testimonials">
			<h2 className="section__title">Recommendation</h2>
			<h4
				className=""
				style={{
					marginTop: '-40px',
					marginLeft: '20px',
				}}
			>
				(Coming soon)
			</h4>

			<Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} loop={true} grabCursor={true} pagination={{ clickable: true }} className="testimonials__container grid">
				{reviewData.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="avatar" />
							</div>
							<h3 className="testimonials__title">{title}</h3>
							<span className="subtitle"> {subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
