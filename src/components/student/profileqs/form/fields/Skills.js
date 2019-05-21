import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { ErrorMessage, Field } from 'formik';

import { reactSelectStylesStretch } from '../../../../../styles/ReactSelectStyles';

const Skills = ({ skills, top_skills, skillsList, setSkillsList }) => {
  // props `skills` and `top_skills` are from backend

  const [skillsInput, setSkillsInput] = useState();

  const createSkillsOption = label => ({
    label,
    topSkill: false,
    value: label
  });

  const handleKeyDown = event => {
    if (!skillsInput) return;
    // add the skill if `Enter` or `Tab` is pressed
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setSkillsList(previousState => [
          ...previousState,
          createSkillsOption(skillsInput)
        ]);
        // clear the `<input>`
        setSkillsInput('');
        event.preventDefault();
        break;
      default:
        return;
    }
  };

  // Create options list as expected by React Select component
  useEffect(() => {
    setSkillsList(
      skills.map(skill => {
        const option = createSkillsOption(skill);

        // set `topSkill: true` if it's in `top_skills` array
        if (top_skills.includes(skill)) {
          option.topSkill = true;
        }
        return option;
      })
    );
  }, [skills, top_skills, setSkillsList]);

  return (
    <label className="stretch-input">
      <span className="input-label">Skills</span>
      <br />
      <Field
        name="skills"
        multiple
        render={({ field }) => (
          <>
            <CreatableSelect
              components={{ DropdownIndicator: null }}
              isClearable
              isMulti
              inputValue={skillsInput}
              menuIsOpen={false}
              name={field.name}
              onBlur={field.onBlur}
              onChange={list => {
                setSkillsList(list);
              }}
              onInputChange={inputValue => setSkillsInput(inputValue)}
              onKeyDown={handleKeyDown}
              placeholder="Type a skill and press enter..."
              styles={reactSelectStylesStretch}
              value={skillsList}
            />
          </>
        )}
      />
      <ErrorMessage
        name="skills"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>
  );
};

export default Skills;
