import React, { useEffect, useState } from 'react';
import { Field } from 'formik';

import LocationSelect from '../../../../location/LocationSelect';
import { reactSelectStyles } from '../../../../../styles/ReactSelectStyles';

const CurrentLocation = ({ formValues, lat, location, lon }) => {
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    if (lat && location && lon) {
      setCurrentLocation({
        label: location,
        value: { lat, locationName: location, lon }
      });
    }
  }, [lat, location, lon, setCurrentLocation]);

  return (
    <label>
      <span className="input-label">Current Location</span>
      <br />
      <Field
        name="location"
        type="text"
        render={({ field }) => (
          <>
            <LocationSelect
              isClearable
              fieldValue={currentLocation}
              name={field.name}
              onBlur={field.onBlur}
              onChange={option => {
                setCurrentLocation(option);
                formValues.lat = option.value.lat;
                formValues.location = option.value.locationName;
                formValues.lon = option.value.lon;
              }}
              styles={reactSelectStyles}
            />
          </>
        )}
      />
    </label>
  );
};

export default CurrentLocation;
