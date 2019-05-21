import React, { useEffect } from 'react';
import { Field } from 'formik';

import LocationSelect from '../../../../location/LocationSelect';
import { reactSelectStylesStretch } from '../../../../../styles/ReactSelectStyles';

const DesiredLocations = ({
  desired_locations,
  desiredLocations,
  setDesiredLocations
}) => {
  // Create options list as expected by LocationSelect component
  useEffect(() => {
    if (desired_locations && desired_locations[0]) {
      setDesiredLocations(
        desired_locations.map(item => ({
          label: item.location,
          value: {
            lat: item.lat,
            locationName: item.location,
            lon: item.lon
          }
        }))
      );
    }
  }, [desired_locations, setDesiredLocations]);
  return (
    <label className="stretch-input">
      <span className="input-label">Desired Locations</span>
      <br />
      <Field
        name="desired_locations"
        type="text"
        render={({ field }) => (
          <>
            <LocationSelect
              isClearable
              isMulti
              fieldValue={desiredLocations}
              name={field.name}
              onBlur={field.onBlur}
              onChange={list => {
                setDesiredLocations(list);
              }}
              styles={reactSelectStylesStretch}
            />
          </>
        )}
      />
    </label>
  );
};

export default DesiredLocations;
