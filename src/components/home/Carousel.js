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
			delay: 2000
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
		pagination: {
			el: '.swiper-pagination'
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
								<img
									src={
										'https://morenowtech.com/wp-content/uploads/2019/05/tico.jpg'
									}
									alt="Project media"
								/>
								<h3>{x.name}</h3>
								<button>Learn More</button>
							</a>
						</div>
					</div>
				))}
			</Swiper>
		</div>
	);
};

export default ProjectViewHome;
