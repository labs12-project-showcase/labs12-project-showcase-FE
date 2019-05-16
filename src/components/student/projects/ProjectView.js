import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { getProject } from '../projectqs/projectqsActions';
import ProjectSkills from '../projectSkills/ProjectSkills';
import NotApproved from '../notApproved/NotApproved';
import ProgressProject from '../progressProject/ProgressProject';
import MediaGallery from './MediaGallery';
import ProjectLinkButton from './ProjectLinkButton';
import ProjectStudents from './ProjectStudents';
//import ProjectPitches from "./ProjectPitches";
import ProjectLeftHeader from './ProjectLeftHeader';

const ProjectView = ({
	project: { projectData },
	dispatch,
	match: {
		params: { id }
	}
}) => {
	useEffect(() => {
		dispatch(getProject(id));
	}, [id, dispatch]);

	if (projectData.emptyReturn) {
		return <Redirect to="/404" />
	}
	return (
		<div className="project-view">
			<NotApproved approved={projectData.approved} />
			<header>
				<ProjectLeftHeader
					name={projectData.name}
					medium={projectData.medium}
					website={projectData.website}
					short_description={projectData.short_description}
				/>
				<MediaGallery
					imageUrls={projectData.project_media}
					rawYouTubeUrl={projectData.youtube_url}
				/>
			</header>
			<main>
				<div className="pitch-and-projectURL-container">
					{/* <ProjectPitches
            tech_pitch={projectData.tech_pitch}
            customer_pitch={projectData.customer_pitch}
          /> */}

					<ProjectStudents students={projectData.students} />
					<hr />
					<div className="project-urls-container">
						<ProjectLinkButton
							link={projectData.github}
							className="github-chip"
							iClassName="fab fa-github"
						/>
						<ProjectLinkButton link={projectData.fe_link} text="Front End" />
						<ProjectLinkButton link={projectData.be_link} text="Back End" />
						<ProjectLinkButton
							link={projectData.market_link}
							text="Marketing"
						/>
						<ProjectLinkButton link={projectData.mobile_link} text="Mobile" />
						<ProjectLinkButton link={projectData.design_link} text="Design" />
					</div>
				</div>
				<hr />
				<ProjectSkills projectSkills={projectData.project_skills} />
			</main>
			<ProgressProject project={projectData} />
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
