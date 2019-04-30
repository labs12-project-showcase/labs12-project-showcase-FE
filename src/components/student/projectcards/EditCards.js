import React, { useState } from 'react';

const EditCards = ({ submit, cancel, id }) => {
<<<<<<< HEAD
  //New Top Projects should initialize with the list of top projects from props
  const [newTopProjs, updateTopProjs] = useState(top_projects);
  //New Projects should initialize with the list of projects from props
  const [newProjs, updateProjs] = useState(projects);
  const [dragged, updateDragged] = useState({});
=======
	const [newTopProjs, updateTopProjs] = useState(top_projects);
	//New Projects should initialize with the list of projects from props
	const [newProjs, updateProjs] = useState(projects);
	const [dragged, updateDragged] = useState({});
	//New Top Projects should initialize with the list of top projects from props
>>>>>>> 43dca86547b41810930af44fae689133bcdc4197

	const handleSubmit = () => {
		const top_projects = newTopProjs.map(proj => ({
			project_id: proj.project_id,
			student_id: id
		}));
		const projects = newProjs.map(proj => ({
			project_id: proj.project_id,
			student_id: id
		}));

		submit({ top_projects, projects });
	};

	const beginDrag = (e, index) => {
		e.preventDefault();
		updateDragged(index);
	};

	const handleDrop = e => {
		//Convert dataset to a number
		const topIndex = Number(e.target.dataset.index);

		//Find the correct projects from each array
		const newTop = newProjs[dragged];
		const newBottom = newTopProjs[topIndex];

		//Reduce each array with new projects in place of old ones
		const newTops = newTopProjs.reduce((arr, cur, index) => {
			if (index === topIndex) {
				return [...arr, newTop];
			}
			return [...arr, cur];
		}, []);

		const newBottoms = newProjs.reduce((arr, cur, index) => {
			if (index === dragged) {
				return [...arr, newBottom];
			}
			return [...arr, cur];
		}, []);

		//Update state of top projects and projects. Also clear dragged index.
		updateTopProjs(newTops);
		updateProjs(newBottoms);
		updateDragged({});
	};

	const handleDragOver = e => {
		e.preventDefault();
	};

	//Dragging should only be available from lower project => upper project area
	const draggableMap = arr =>
		arr.map((proj, index) => (
			<div key={proj.project_id} className="project-card drag-drop-target">
				<div
					className="drag-target-cover"
					draggable
					onDrag={e => beginDrag(e, index)}
				/>

				<img src={proj.media[0]} alt="Project media" />
				<h3>{proj.name}</h3>
				<p>{proj.type}</p>
			</div>
		));
	const targetMap = arr =>
		arr.map((proj, index) => (
			<div
				key={proj.project_id}
				onDrop={e => handleDrop(e)}
				onDragOver={e => handleDragOver(e)}
				className="project-card drag-drop-target"
			>
				<div className="drop-target-cover" data-index={index} />
				<div className="card-content">
					<img src={proj.media[0]} alt="Project media" />
					<h3>{proj.name}</h3>
					<p>{proj.type}</p>
				</div>
			</div>
		));
	return (
		<React.Fragment>
			<div className="projects-inner-wrapper">
				{targetMap(newTopProjs)}
				<p className="edit-project-message">
					Please drag projects from below to the top projects section.
				</p>
				{draggableMap(newProjs)}
			</div>
			<div className="projects-buttons-container">
				<button type="button" onClick={handleSubmit}>
					Submit Projects
				</button>
				<button type="button" onClick={cancel}>
					Cancel
				</button>
			</div>
		</React.Fragment>
	);
};

const top_projects = [
	{
		name: 'Top Uno',
		project_id: 1,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Top Dos',
		project_id: 2,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Top Tres',
		project_id: 3,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	}
];

const projects = [
	{
		name: 'Bottom 1',
		project_id: 4,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Bottom 2',
		project_id: 5,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Bottom 3',
		project_id: 6,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Bottom 4',
		project_id: 7,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Bottom 5',
		project_id: 8,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	},
	{
		name: 'Bottom 6',
		project_id: 9,
		type: 'React Application with cool stuff',
		media: [
			'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
		]
	}
];

export default EditCards;
