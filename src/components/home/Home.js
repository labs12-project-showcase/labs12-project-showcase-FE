import React from 'react';
import Carousel from './Carousel';
import MapboxMapContainer from '../mapboxMap/MapboxMapContainer';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="map-container">
					<MapboxMapContainer />
				</div>

				<header>
					<div className="header-text">
						<section>
							<div className="carousel-section">
								<Carousel {...this.props} />
							</div>
							<h1>Lambda School Showcase</h1>
						</section>
					</div>
				</header>
			</div>
		);
	}
}

export default Home;
