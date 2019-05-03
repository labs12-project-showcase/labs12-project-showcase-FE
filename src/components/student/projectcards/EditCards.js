import React, { useState } from "react";

const EditCards = ({ id, top_projects, projects }) => {
  //New Top Projects should initialize with the list of top projects from props
  const [newTopProjs, updateTopProjs] = useState(top_projects || []);
  //New Projects should initialize with the list of projects from props
  const [newProjs, updateProjs] = useState(projects || []);
  const [dragged, updateDragged] = useState({});

  const handleSubmit = () => {
    const top_projects = newTopProjs.map(proj => ({
      project_id: proj.project_id,
      student_id: id
    }));
    const projects = newProjs.map(proj => ({
      project_id: proj.project_id,
      student_id: id
    }));

    //#TODO Submit Action here for projects page
  };

  //#TODO Cancel changes action here maybe??

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
    <div className="projects-wrapper">
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
        <button
          type="button"
          onClick={() => {
            console.log("Need cancel changes handler");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCards;
