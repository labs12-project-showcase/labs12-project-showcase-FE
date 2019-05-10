import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getProject } from '../projectqs/projectqsActions';
import MediaGallery from './MediaGallery';
import NotApproved from '../notApproved/NotApproved';
import ProjectSkills from '../projectSkills/ProjectSkills';
import ProgressProject from '../progressProject/ProgressProject';

const ProjectView = ({
	project: { projectData },
	dispatch,
	history,
	curAccount,
	match: {
		params: { id }
	}
}) => {
	useEffect(() => {
		dispatch(getProject(id));
	}, [id, dispatch]);

	return (
		<div className="project-view">
			{!projectData.approved ? <NotApproved /> : null}
			<header>
				<div className="img-des">
					<h1>{projectData.name}</h1>
					<h2>{projectData.short_description}</h2>
					<a
						href={projectData.website}
						target="_blank"
						rel="noopener noreferrer"
					>
						Try it out!
					</a>
					<a
						href={projectData.medium}
						target="_blank"
						rel="noopener noreferrer"
					>
						Read the Story on M
					</a>
				</div>
				<MediaGallery
					imageUrls={projectData.project_media}
					rawYouTubeUrl={projectData.youtube_url}
				/>
			</header>
			<main>
				<div className="pitch-and-projectURL-container">
					<div className="project-urls-container">
						<a
							href={projectData.github}
							target="_blank"
							rel="noopener noreferrer"
							className="github-chip"
						>
							<i className="fab fa-github" />
						</a>
						<a
							href={projectData.fe_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Front End
						</a>
						<a
							href={projectData.be_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Back End
						</a>
						<a
							href={projectData.market_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Marketing
						</a>
						<a
							href={projectData.mobile_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Mobile
						</a>
						<a
							href={projectData.design_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Design
						</a>
					</div>

					<div className="sales-pitch">
						<hr className="hrTop" />
						<h2>Customer Sales Pitch</h2>
						<p>{projectData.customer_pitch || 'Please add customer pitch'}</p>
					</div>
					<div className="sales-pitch">
						<hr className="hrTop" />
						<h2>Technical Sales Pitch</h2>
						<p>{projectData.tech_pitch || 'Please add tech pitch'}</p>
					</div>
				</div>
				{/* {sameUser && <Progress />} */}
				<ProgressProject />

				<h2>Who Built This?</h2>
				<div className="students-names">
					{projectData.students
						? projectData.students.map(student => (
								<Link
									to={`/student/profile/${student.student_id}`}
									key={student.name}
									className="s-link"
								>
									<div className="s-pic">
										<img src={student.profile_pic} alt={student.name} />
									</div>
									<p>{student.name}</p>
								</Link>
						  ))
						: 'Loading...'}
				</div>

				<div className="project-skills">
					<h2>Technical Architecture </h2>
					<div className="status-skills">
						<ProjectSkills projectSkills={projectData.project_skills} />
					</div>
				</div>
			</main>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		project: state.project,
		curAccount: state.profile.profileData.id
	};
};

export default withRouter(connect(mapStateToProps)(ProjectView));
