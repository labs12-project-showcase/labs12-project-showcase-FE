import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import project from '../../../assets/project-img.jpg';
import one from '../../../assets/one.jpg';
import two from '../../../assets/two.jpg';
import three from '../../../assets/three.jpg';
import s1 from '../../../assets/s1.png';
import s2 from '../../../assets/s2.png';
import s3 from '../../../assets/s3.png';
import s4 from '../../../assets/s4.png';
import s5 from '../../../assets/s5.png';

const ProjectView = props => {
	// change /watch/ by /embed/ Questions PM "Julian"
	//  const url = {project_video}
	const url = 'https://www.youtube.com/watch?v=TcMBFSGVi1c&t=2s';
	const videoid = url.match(
		/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
	);
	if (videoid != null) {
		console.log('video id = ', videoid[1]);
	} else {
		console.log('The youtube url is not valid.');
	}

	return (
		<div className="project-view">
			<div className="subNav">
				<nav>
					<Link exact to="/student/project-edit">
						Edit Project
					</Link>
					<Link exact to="/student/profile-edit">
						Edit Profile
					</Link>
				</nav>
			</div>
			<header>
				<div className="img-des">
					<img src={project} alt="Project" />
					<div className="overlay" />
					<h1>Machine-Brain Interface</h1>
					<h2>Web App</h2>
					<a href="https://google.com">Try it out!</a>
					<a href="https://google.com">Read the Story on M</a>
				</div>
				<div className="media-display">
					<div className="big-gallery">
						<iframe
							width="100%"
							height="350"
							src={`https://www.youtube.com/embed/${
								videoid[1]
							}?autoplay=0&showinfo=0&controls=0`}
							frameborder="0"
							allowfullscreen
						/>
					</div>
					<div className="img-one">
						<img src={one} alt="Project" />
					</div>
					<div className="img-two">
						<img src={two} alt="Project" />
					</div>
					<div className="img-three">
						<img src={three} alt="Project" />
					</div>
				</div>
			</header>
			<main>
				<div className="sales-pitch">
					<h2>Customer Sales Pitch</h2>
					<p>
						Summary here, long text, talk about what I'm passionate about, where
						I want to work, what hobbies are, things I enjoy... Here's some more
						cool things about me. I'm a really hard worker.
					</p>
				</div>
				<div className="sales-pitch">
					<h2>Technical Sales Pitch</h2>
					<p>
						Summary here, long text, talk about what I'm passionate about, where
						I want to work, what hobbies are, things I enjoy... Here's some more
						cool things about me. I'm a really hard worker.
					</p>
				</div>
				<hr />
				<h2>Who Built This?</h2>
				<div className="students-names">
					<div className="s-link">
						<img src={s1} alt="Project" />
						<p>Student Name</p>
					</div>
					<div className="s-link">
						<img src={s2} alt="Project" />
						<p>Student Name</p>
					</div>
					<div className="s-link">
						<img src={s3} alt="Project" />
						<p>Student Name</p>
					</div>
					<div className="s-link">
						<img src={s4} alt="Project" />
						<p>Student Name</p>
					</div>
					<div className="s-link">
						<img src={s5} alt="Project" />
						<p>Student Name</p>
					</div>
				</div>
				<hr />
				<h2>Technical Architecture </h2>
			</main>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.project
	};
};

export default withRouter(connect(mapStateToProps)(ProjectView));
