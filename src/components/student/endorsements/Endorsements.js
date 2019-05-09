import React from 'react';
import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';

const Endorsements = ({ endorsements }) => {
	const params = {
		modules: [Pagination],
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
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		spaceBetween: 30,
		loop: true
	};

	return (
		<>
			<div className="endorsements">
				<hr className="hrTop" />
				<h2>Endorsement</h2>
				{endorsements.length ? (
					<Swiper {...params}>
						{endorsements.map((endorsement, index) => (
							<div className="swiper-slide" key={index}>
								<p>
									{endorsement.message} - {endorsement.name}
								</p>
							</div>
						))}
					</Swiper>
				) : (
					<p className="endorsementEmpty">
						There are currently no endorsements for this student.
					</p>
				)}
			</div>
		</>
	);
};

export default Endorsements;
