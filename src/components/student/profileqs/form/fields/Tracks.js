import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import Select from 'react-select';

import { reactSelectStyles } from '../../../../../styles/ReactSelectStyles';

const Tracks = ({ track_id, track_options }) => {
  // Tracks uses state to hold the current selection
  // as a workaround for not being able to use defaultValue
  // because the form doesn't wait for the initialData
  const [trackSelection, setTrackSelection] = useState();

  // Create options list as expected by React Select component
  const [trackOptions, setTrackOptions] = useState([]);
  useEffect(() => {
    setTrackOptions(
      track_options.map(track => ({
        label: track.name,
        value: track.track_id
      }))
    );

  }, [track_options]);
  
  useEffect(() => {
    // Pre-Populate selection if possible
    if (track_id && trackOptions.length) {
      for (let track in trackOptions) {
        if (trackOptions[track].value === track_id) {
          setTrackSelection(trackOptions[track]);
          break;
        }
      }
    }
  }, [track_id, trackOptions])

  return (
    <label>
      <span className="input-label">Lambda Track</span>
      <br />
      <Field
        name="track"
        render={({ field, form }) => (
          <>
            <Select
              name={field.name}
              onBlur={field.onBlur}
              onChange={option => {
                setTrackSelection(option);
                form.setFieldValue('track_id', option.value);
              }}
              options={trackOptions}
              styles={reactSelectStyles}
              value={trackSelection}
            />
          </>
        )}
      />
      <ErrorMessage
        name="track"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>
  );
};

export default Tracks;
