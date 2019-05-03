import React, { useState } from "react";

const EditCards = ({ top_projects, projects, setProjects, setTopProjects }) => {
  const [dragged, updateDragged] = useState({});

  const beginDrag = (e, index) => {
    e.preventDefault();
    updateDragged(index);
  };

  const handleDrop = e => {
    //Convert dataset to a number
    const topIndex = Number(e.target.dataset.index);

    //Find the correct projects from each array
    const newTop = projects[dragged];
    const newBottom = top_projects[topIndex];

    //Reduce each array with new projects in place of old ones
    const newTops = top_projects.reduce((arr, cur, index) => {
      if (index === topIndex) {
        return [...arr, newTop];
      }
      return [...arr, cur];
    }, []);

    const newBottoms = projects.reduce((arr, cur, index) => {
      if (index === dragged) {
        return [...arr, newBottom];
      }
      return [...arr, cur];
    }, []);

    //Update state of top projects and projects. Also clear dragged index.
    console.log("NEW TOP PROJECTS", newTops);
    console.log("NEW PROJECTS", newBottoms);
    setTopProjects(newTops);
    setProjects(newBottoms);
    updateDragged({});
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  //Dragging should only be available from lower project => upper project area
  const draggableMap = arr =>
    arr.map((proj, index) => (
      <div key={proj.id} className="project-card drag-drop-target">
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
        key={proj.id}
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
        {targetMap(top_projects)}
        <p className="edit-project-message">
          Please drag projects from below to the top projects section.
        </p>
        {draggableMap(projects)}
      </div>
    </div>
  );
};

export default EditCards;
