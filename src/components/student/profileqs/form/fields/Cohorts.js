import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import Select from 'react-select';

import { reactSelectStyles } from '../../../../../styles/ReactSelectStyles';

const Cohorts = ({ cohort_id, cohort_options }) => {
  const [cohortSelection, setCohortSelection] = useState();

  // Create options list as expected by React Select component
  const [cohortOptions, setCohortOptions] = useState([]);
  useEffect(() => {
    setCohortOptions(
      cohort_options.map(cohort => ({
        label: cohort.cohort_name,
        value: cohort.cohort_id
      }))
    );
  }, [cohort_options]);
  
  useEffect(() => {
    // Pre-Populate selection if possible
    if (cohort_id && cohortOptions.length) {
      for (let cohort in cohortOptions) {
        if (cohortOptions[cohort].value === cohort_id) {
          setCohortSelection(cohortOptions[cohort]);
          break;
        }
      }
    }
  }, [cohort_id, cohortOptions])

  return (
    <label>
      <span className="input-label">Lambda Cohort</span>
      <br />
      <Field
        name="cohort"
        render={({ field, form }) => (
          <>
            <Select
              name={field.name}
              onBlur={field.onBlur}
              onChange={option => {
                setCohortSelection(option);
                form.setFieldValue('cohort_id', option.value);
              }}
              options={cohortOptions}
              styles={reactSelectStyles}
              value={cohortSelection}
            />
          </>
        )}
      />
      <ErrorMessage
        name="cohort"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>
  );
};

export default Cohorts;
