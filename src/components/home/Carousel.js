import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

const ProjectViewHome = ({ projects_shocase }) => {
	projects_shocase = [
		{
			name: 'Mentors International',
			imageUrl: 'https://morenowtech.com/wp-content/uploads/2019/05/tico.jpg'
		},
		{
			name: 'Fit Me',
			imageUrl: 'https://morenowtech.com/wp-content/uploads/2019/05/fit-me.jpg'
		},
		{
			name: 'Tabless Thursday',
			imageUrl:
				'https://morenowtech.com/wp-content/uploads/2019/05/tabless-thursday.jpg'
		},
		{
			name: 'GUIDR',
			imageUrl: 'https://morenowtech.com/wp-content/uploads/2019/05/guidr.jpg'
		},
		{
			name: 'Random Project',
			imageUrl:
				'https://morenowtech.com/wp-content/uploads/2015/01/soy-el-guia.jpg'
		},
		{
			name: 'One More Random Project',
			imageUrl: 'https://morenowtech.com/wp-content/uploads/2015/01/Marvic.jpg'
		},
		{
			name: 'Blog project',
			imageUrl:
				'https://morenowtech.com/wp-content/uploads/2015/01/thedroptv.jpg'
		},
		{
			name: 'Occupational Therapy',
			imageUrl:
				'https://morenowtech.com/wp-content/uploads/2015/01/TheAptusGroup.jpg'
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
				{dataEx.map((x, index) => (
					<div className="cover-img" key={index}>
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
