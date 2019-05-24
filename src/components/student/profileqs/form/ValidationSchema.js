import * as Yup from 'yup';

// Validation Schema, feels similar to React PropTypes
export const ProfileQsSchema = Yup.object().shape({
  about: Yup.string()
    .max(500, `Maximum 500 characters`)
    .trim(),
  acclaim: Yup.string()
    .trim()
    .url('Must be a valid URL, including https://...')
    .matches(/^https?:\/\/www.youracclaim.com(.*)/i, {
      excludeEmptyString: true,
      message: `Must be from https://www.youracclaim.com/`
    }),
  desired_title: Yup.string()
    .max(100, `Maximum 100 characters`)
    .trim(),
  github: Yup.string()
    .required('GitHub account link is required')
    .trim()
    .url('Must be a valid URL, including https://...'),
  linkedin: Yup.string()
    .trim()
    .url('Must be a valid URL, including https://...'),
  location: Yup.string().trim(),
  name: Yup.string()
    .max(100, `Maximum 100 characters`)
    .required('Name is required')
    .trim(),
  website: Yup.string()
    .trim()
    .url('Must be a valid URL, including https://...'),
  twitter: Yup.string()
    .trim()
    .url('Must be a valid URL, including https://...')
});
