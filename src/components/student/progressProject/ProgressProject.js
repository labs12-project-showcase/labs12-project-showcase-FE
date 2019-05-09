import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Progress as ProgressCircle } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const ProgressProject = ({ project }) => {
	const [percentage, updatePercent] = useState(0);
	const [full, updateFull] = useState([]);
	const [empty, updateEmpty] = useState([]);
	useEffect(() => {
		const {
			id,
			approved,
			students,
			name,
			website,
			short_description,
			...rest
		} = project;
		if (project) {
			checkFields(rest);
		}
	}, [project]);

	const checkFields = data => {
		//Check length
		const total = Object.keys(data).length;
		let actual = total;
		//Split full and empty to separate arrays
		let full = [];
		let empty = [];

		//Check truthy for every key in object
		for (let i in data) {
			if (!data[i] || !data[i].length) {
				actual--;
				const field = i.split('_').reduce((name, cur) => {
					if (cur.charAt(0) !== '_') {
						name.push(cur.charAt(0).toUpperCase() + cur.slice(1));
						return name;
					} else {
						return name;
					}
				}, []);
				empty.push(field.join(' '));
			} else {
				const field = i.split('_').reduce((name, cur) => {
					if (cur.charAt(0) !== '_') {
						name.push(cur.charAt(0).toUpperCase() + cur.slice(1));
						return name;
					} else {
						return name;
					}
				}, []);
				full.push(field.join(' '));
			}
		}

		//Calculate percent and update all pieces of state
		const percent = Math.floor((actual / total) * 100);
		updatePercent(percent);
		updateEmpty(empty);
		updateFull(full);
	};

	const renderChecked = arr =>
		arr.map(key => (
			<div className="checkbox-wrapper" key={key}>
				<input type="checkbox" checked disabled className="checkbox" /> {key}
			</div>
		));

	const renderEmpty = arr =>
		arr.map(key => (
			<div className="checkbox-wrapper" key={key}>
				<input type="checkbox" disabled className="checkbox" /> {key}
			</div>
		));

	return (
		<div className="progressProject-container">
			<p className="top-text">Project</p>
			<ProgressCircle
				type="circle"
				percent={percentage}
				status="default"
				theme={{
					default: {
						color: '#bb1333',
						trailColor: '#5a0615'
					}
				}}
				strokeWidth={9}
			/>
			<p className="bottom-text">Complete</p>
			<div className="incomplete-box">
				<h2>Incomplete:</h2>
				{renderEmpty(empty)}
			</div>
			<div className="complete-box">
				<h2>Complete:</h2>
				{renderChecked(full)}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	project: state.project.projectData
});

export default connect(mapStateToProps)(ProgressProject);
