import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';

const LocationSelect = ({
	fieldValue,
	isClearable,
	isMulti,
	noOptionsMessage,
	name,
	onBlur,
	onChange,
	placeholder,
	styles
}) => {
	return (
		<AsyncSelect
			getOptionValue={opt => opt.value.locationName}
			isClearable={isClearable}
			isMulti={isMulti}
			loadOptions={getLocationOptions}
			name={name}
			onBlur={onBlur}
			onChange={onChange}
			noOptionsMessage={noOptionsMessage}
			placeholder={placeholder}
			styles={styles}
			value={fieldValue}
		/>
	);
};

LocationSelect.defaultProps = {
	fieldValue: 'You need to add a state variable here',
	isClearable: false,
	isMulti: false,
	name: 'location',
	onBlur: () => {},
	onChange: () => {},
	noOptionsMessage: () => 'Type to begin searching...',
	placeholder: 'Type to search...',
	styles: {}
};

/**
 * Encodes a string by replacing certain characters with the
 * UTF-8 encoding of the character for use in URLs.
 * This function goes farther than `encodeURLComponent` by
 * encoding additional characters reserved by the RFC
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * @param {String} str String to be encoded
 * @returns {String} URI-encoded string
 */
function fixedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
}

/**
 * Takes user input, queries Mapbox Geocoding API, parses Mapbox response,
 * returns array of objects ready for use as options in React Select
 * @param {String} inputValue String from user input in React Select component
 * @returns {[Object]} Array of objects ready for use as options in React Select
 */
function getLocationOptions(inputValue) {
	if (inputValue.length < 3) return [];

	// @TODO: restrict the accessToken in account.mapbox.com to only our URL
	const accessToken =
		'pk.eyJ1IjoiaGlyZWxhbWJkYSIsImEiOiJjanV5NWxpYngwdHhrNDRzZGZ5bGpuajF1In0.PaoVriw9FhbRdhyDjHnwTQ';
	const encodedInput = fixedEncodeURIComponent(inputValue);
	return axios
		.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedInput}.json?access_token=${accessToken}`
		)
		.then(response => {
			return mapboxToOptions(response.data);
		})
		.catch(error => console.error(error));
}

/**
 * Receives a JSON Object from Mapbox and returns an array of objects
 * formatted for use as options in a React Select component.
 * @param {JSON} response Mapbox JSON response
 * @returns {[Object]} Array of objects, formatted for React Select
 */
function mapboxToOptions(response) {
	return response.features.map(feature => ({
		label: feature.place_name,
		value: {
			lat: feature.geometry.coordinates[1],
			locationName: feature.place_name,
			lon: feature.geometry.coordinates[0]
		}
	}));
}

export default LocationSelect;
