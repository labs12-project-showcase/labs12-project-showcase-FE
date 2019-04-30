import React, { Component, useState } from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
// import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';

const ProjectViewHome = ({ projects_shocase }) => {
	projects_shocase = [
		{
			name: 'Reel Viewer',
			imageUrl:
				'https://www.uncommongoods.com/images/items/47400/47435_1_360px.jpg'
		},
		{
			name: 'Mathematical Glasses - Set of 4',

			imageUrl:
				'https://www.uncommongoods.com/images/items/46700/46720_1_360px.jpg'
		},
		{
			name: 'Shakespearean Insults Chart',

			imageUrl:
				'https://www.uncommongoods.com/images/items/27300/27303_1_360px.jpg'
		},
		{
			name: 'Yoga Joes',

			imageUrl:
				'https://www.uncommongoods.com/images/items/43200/43212_1_360px.jpg'
		},
		{
			name: 'Dinosaur Taco Holders',

			imageUrl:
				'https://www.uncommongoods.com/images/items/45700/45759_1_360px.jpg'
		},
		{
			name: 'Color Changing Cinema Lightbox',

			imageUrl:
				'https://www.uncommongoods.com/images/items/46600/46667_1_360px.jpg'
		},
		{
			name: 'Avocado Tree Starter Kit - Set of 3',

			imageUrl:
				'https://www.uncommongoods.com/images/items/40800/40804_1_360px.jpg'
		},
		{
			name: 'Hero Bookend',

			imageUrl:
				'https://www.uncommongoods.com/images/items/47500/47500_1_360px.jpg'
		},
		{
			name: 'Fishing Pole Campfire Roaster',

			imageUrl:
				'https://www.uncommongoods.com/images/items/43000/43021_1_360px.jpg'
		},
		{
			name: 'Elwood the Unicorn Cereal Bowl',
			imageUrl:
				'https://www.uncommongoods.com/images/items/25800/25893_1_360px.jpg'
		},
		{
			name: 'Spotted Wellies Garden Ducks',

			imageUrl:
				'https://www.uncommongoods.com/images/items/26500/26530_1_360px.jpg'
		},
		{
			name: 'Eye Glasses Holder',
			id: 11,
			price: 15.49,
			imageUrl:
				'https://www.uncommongoods.com/images/items/19000/19079_1_360px.jpg'
		}
	];

	const params = {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},
		pagination: {
			el: '.swiper-pagination'
		},
		loop: true
	};

	const dataEx = projects_shocase;

	return (
		<div>
			<Swiper {...params}>
				{dataEx.map(x => (
					<div className="cover-img">
						<a
							key={x.project_id}
							className="project-card"
							href={`/student/project-view/${x.project_id}`}
						>
							<img src={x.imageUrl} alt="Project media" />
							<h3>{x.name}</h3>
							<button>Learn More</button>
						</a>
					</div>
				))}
			</Swiper>
		</div>
	);
};

export default ProjectViewHome;
