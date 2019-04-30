import React, { useState } from "react";

const EditCards = ({ submit, cancel }) => {
  const [newTopProjs, updateTopProjs] = useState(top_projects);
  //New Projects should initialize with the list of projects from props
  const [newProjs, updateProjs] = useState(projects);
  const [dragged, updateDragged] = useState({});
  //New Top Projects should initialize with the list of top projects from props

  const handleSubmit = () => {};

  const beginDrag = (e, project) => {
    e.preventDefault();
    updateDragged(project);
  };

  const handleDrop = e => {};

  const handleDragOver = e => {};

  //Dragging should only be available from lower project => upper project area
  /*When a project is dragged from newProjs, to newTopProjs, there should be a filter on each array
        newProjs => filter !target
        newTopProjs => filter !target2

        After the filter we need to push the new targets into each array.
        newProjs => push target2
        newTopProjs => push target

        This should repeat until the user is satisfied.
        Submit button should call an action with both of the current arrays.
        They will need to be formatted prior to update.
        projects = newProjs.map proj => { project_id: proj.project_id, student_id: id }
        top_projects = newTopProjs.map proj => { project_id: proj.project_id, student_id: id }
        update => {
            top_projects [{
                project_id,
                student_id
            }],
            projects [{
                project_id,
                student_id
            }]
        }
    */

  const draggableMap = arr =>
    arr.map(proj => (
      <div
        key={proj.project_id}
        className="project-card draggable"
        draggable
        onDrag={e => beginDrag(e, proj)}
      >
        <img src={proj.media[0]} alt="Project media" />
        <h3>{proj.name}</h3>
        <p>{proj.type}</p>
      </div>
    ));
  const targetMap = arr =>
    arr.map(proj => (
      <div
        key={proj.project_id}
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        className="project-card drag-target"
      >
        <img src={proj.media[0]} alt="Project media" />
        <h3>{proj.name}</h3>
        <p>{proj.type}</p>
      </div>
    ));
  return (
    <React.Fragment>
      <div className="projects-inner-wrapper">
        {targetMap(newTopProjs)}
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
    name: "Brandons project",
    project_id: 1,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 2,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 3,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  }
];

const projects = [
  {
    name: "Brandons project",
    project_id: 4,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 5,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 6,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 7,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 8,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  },
  {
    name: "Brandons project",
    project_id: 9,
    type: "React Application with cool stuff",
    media: [
      "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
    ]
  }
];

export default EditCards;
