import React from 'react';
import Swiper from 'react-id-swiper';

class Endorsements extends React.Component {
	render() {
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
			}
		};
		return (
			<div className="endorsements">
				<h2>Endorsement</h2>

				<Swiper {...params}>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
						ratione rerum aut sint. Totam, qui consequatur ducimus dignissimos
						dolorum ipsum, fuga consectetur ratione, atque voluptatibus et ea
						accusamus? Suscipit, iure?
					</div>
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
						sint ad repellat, dolorem doloremque iusto libero, pariatur ducimus
						fuga, hic eaque ipsam dolore expedita nostrum earum omnis? Tenetur,
						accusantium soluta.
					</div>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
						quasi fugit sunt ex laudantium, eos, eligendi dolorum placeat quidem
						blanditiis consequatur doloremque sed, reprehenderit repellat sit
						quo non aspernatur officia.
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, cupiditate a. Cumque aperiam quo consectetur quia
						minima qui ducimus rerum libero. Dolorem possimus molestiae ea at
						accusamus ratione facere soluta!
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
						id, nesciunt voluptas molestias consequatur esse voluptates sunt
						fugit facilis ratione et repellendus, delectus eum quidem illum sint
						aspernatur autem numquam.
					</div>
				</Swiper>
			</div>
		);
	}
}

export default Endorsements;
