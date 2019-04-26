# Profile Quick Start

The **Profile Quick Start** allows users who do not have profiles to quickly create one by importing information from LinkedIn – if they have authenticated with that site via Auth0 – and to fill in the remaining gaps.

## Design Documents
This form implements the [wireframes](https://projects.invisionapp.com/share/T4RM2G8SDJG#/screens/358862504) and [designs](https://xd.adobe.com/view/87a39d12-5718-4918-4621-1847ba5575d9-f192/screen/2578bf18-cc34-4d9b-9edc-62614a95d81b/Quick-Profile?fullscreen) for the Profile Quick Start.

## Packages
* [Formik](https://jaredpalmer.com/formik/): a small-ish library that simplifies forms in React
* [Yup](https://github.com/jquense/yup): a library that offers schema validation – basically, it's React PropTypes for form validation

## Files
* `Profileqs.js`: the component container
* `ProfileqsForm.js`: creates the Formik form
* `profilesqsReducer.js`: Redux reducers
* `profilesqsActions.js`: Redux actions
* `profileqs.scss`: styles

## Form Validation

| Field             | Required | Validation                       |
| ----------------- | -------- | -------------------------------- |
| Acclaim Badge URL | `false`  | `String`, `trim`, `URL`          |
| Desired Title     | `false`  | `String`, `trim`, max chars: 100 |
| GitHub URL        | `false`  | `String`, `trim`, `URL`          |
| LinkedIn URL      | `false`  | `String`, `trim`, `URL`          |
| Location*         | `false`  | `String`, `trim`                 |
| Name              | `true`   | `String`, `trim`, max chars: 100 |
| Portfolio URL     | `false`  | `String`, `trim`, `URL`          |
| Summary**         | `true`   | `String`, `trim`, max chars: 1,000 |
| Twitter URL       | `false`  | `String`, `trim`, `URL`          |
**Notes**  
*: The Location field is currently a String, but will be converted to an actual location in the near future. Ryan Clark is working on integration with mapbox.  
**: The wireframe indicates the Summary field should have a maximum of 500 words. There isn't a built-in way to do that with `Yup`, and it's at 1,000 characters for now.

## Form Submission
The form is not yet making a `POST` request to the back end. The submit function currently displays an `alert` with the form field values for testing purposes. Once the user flow of registering and integrating LinkedIn profile data is complete, the form will be ready to make that `POST` request.