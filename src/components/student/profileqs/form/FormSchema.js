import React from 'react';
import { ErrorMessage, Field, Form } from 'formik';

import Cohorts from './fields/Cohorts';
import CurrentLocation from './fields/CurrentLocation';
import DesiredLocations from './fields/DesiredLocations';
import Projects from './fields/Projects';
import Skills from './fields/Skills';
import TopSkills from './fields/TopSkills';
import Tracks from './fields/Tracks';

export const FormSchema = ({
  desiredLocations,
  isSubmitting,
  initialValues,
  projectsList,
  setDesiredLocations,
  setSkillsList,
  setProjectsList,
  setTopProjectsList,
  skillsList,
  topProjectsList,
  values
}) => {
  return (
    <Form className="profile-quick-start-form">
      <label>
        <span className="input-label">Name</span>
        <br />
        <Field name="name" type="text" />
        <ErrorMessage
          name="name"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Desired Title</span>
        <br />
        <Field name="desired_title" type="text" />
        <ErrorMessage
          name="desired_title"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <Tracks
        track_id={initialValues.track_id}
        track_options={initialValues.track_options}
      />

      <Cohorts
        cohort_id={initialValues.cohort_id}
        cohort_options={initialValues.cohort_options}
      />

      <label>
        <span className="input-label">Portfolio URL</span>
        <br />
        <Field name="website" type="text" placeholder="https://..." />
        <ErrorMessage
          name="website"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">GitHub Profile URL</span>
        <br />
        <Field name="github" type="text" placeholder="https://..." />
        <ErrorMessage
          name="github"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">LinkedIn Profile URL</span>
        <br />
        <Field name="linkedin" type="text" placeholder="https://..."/>
        <ErrorMessage
          name="linkedin"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Twitter Profile URL</span>
        <br />
        <Field type="text" name="twitter" placeholder="https://..."/>
        <ErrorMessage
          name="twitter"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Acclaim Badge URL</span>
        <br />
        <Field name="acclaim" type="text" placeholder="https://..."/>
        <ErrorMessage
          name="acclaim"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <CurrentLocation
        lat={initialValues.lat}
        location={initialValues.location}
        lon={initialValues.lon}
        formValues={values}
      />

      <DesiredLocations
        desired_locations={initialValues.desired_locations}
        desiredLocations={desiredLocations}
        setDesiredLocations={setDesiredLocations}
      />

      <Skills
        skills={initialValues.skills}
        top_skills={initialValues.top_skills}
        setSkillsList={setSkillsList}
        skillsList={skillsList}
      />

      <TopSkills setSkillsList={setSkillsList} skillsList={skillsList} />

      <label className="stretch-input">
        <p>
          Tell prospective employers about yourself (maximum 500 characters)
        </p>
        <span className="input-label about-label">About</span>
        <br />
        <Field name="about" component="textarea" />
        <ErrorMessage
          name="about"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <Projects
        initialProjects={initialValues.projects}
        initialTopProjects={initialValues.top_projects}
        projectsList={projectsList}
        setProjectsList={setProjectsList}
        topProjectsList={topProjectsList}
        setTopProjectsList={setTopProjectsList}
      />

      <button type="submit" disabled={isSubmitting}>
        {initialValues.exists ? 'Save Changes' : 'Create Profile'}
      </button>
    </Form>
  );
};
