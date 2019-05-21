import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Select from 'react-select';

import { reactSelectStylesStretch } from '../../../../../styles/ReactSelectStyles';

const TopSkills = ({ skillsList, setSkillsList }) => {
  // NOTE: The `skillsList` prop handles state for 
  // both `skills` and `topSkills` and is initially set in `Skills.js`

  const handleChange = (option, field, form) => {
    if (option.length > 3) return;

    /**
     * Loop through the `previousState`.
     * To begin, set all `skill.topSkill`s to `false`
     *
     * IF a `skill` matches a `skill` in the change `option`
     * THEN set `skill.topSkill` to `true`
     */
    setSkillsList(previousState => {
      return previousState.map(skill => {
        skill.topSkill = false;
        for (let topSkill of option) {
          if (skill.value === topSkill.value) {
            skill.topSkill = true;
            return skill;
          }
        }
        return skill;
      });
    });
    form.setFieldValue(field.name, option.map(skill => skill.value));
  };

  return (
    <label className="stretch-input">
      <span className="input-label">Top Skills</span>
      <Field
        multiple
        name="top_skills"
        render={({ field, form }) => (
          <>
            <Select
              isClearable
              isMulti
              name={field.name}
              noOptionsMessage={() =>
                skillsList.filter(skill => skill.topSkill).length < 3
                  ? 'Add skills above, then select your top skills here'
                  : 'Maximum of 3 Top Skills'
              }
              onBlur={field.onBlur}
              onChange={option => handleChange(option, field, form)}
              options={
                skillsList.filter(skill => skill.topSkill).length < 3
                  ? skillsList
                  : []
              }
              styles={reactSelectStylesStretch}
              value={skillsList.filter(skill => skill.topSkill)}
            />
          </>
        )}
      />
      <ErrorMessage
        name="top_skills"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>
  );
};

export default TopSkills;
