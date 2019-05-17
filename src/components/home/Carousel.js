import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import axios from 'axios';

const ProjectViewHome = () => {
	const [projects, updateProjects] = useState([]);

	useEffect(() => {
		if (!projects.length) {
			axios
				.get('https://halg-backend.herokuapp.com/api/projects')
				.then(res => {
					updateProjects(res.data);
					//NEED TO CHANGE BACK END TO LIMIT TO LAST 10-15
				})
				.catch(err => {
					console.log('ERROR FETCHING PROJECT CARDS.', err);
				});
		}
	}, [projects]);

	const params = {
		effect: 'coverflow',
		autoplay: {
			// delay: 3500
			delay: 7500
		},
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
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: 'bullets',
		// 	clickable: true
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		loop: true
	};

	if (!projects.length) {
		return <div>Loading</div>;
	}
	return (
		<div>
			<Swiper {...params}>
				{projects.map((x, index) => (
					<div className="cover-img" key={index}>
						<div className="bottom-card">
							<a
								key={x.id}
								className="project-card"
								href={`/student/project-view/${x.id}`}
							>
								<div className="img-container">
									<img src={x.project_media[0]} alt="Project media" />
								</div>
								<div className="carousel-detail">
									<h3>{x.name}</h3>
									<p>{x.short_description}</p>
									<button>See More</button>
								</div>
							</a>
						</div>
					</div>
				))}
			</Swiper>
		</div>
	);
};

export default ProjectViewHome;
