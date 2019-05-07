import jwtDecode from 'jwt-decode';

export const validateJwt = () => {
  const token = localStorage.getItem('backendToken');
  if (token === null) {
    return false;
  } else {
    const decoded = jwtDecode(token);
    if (new Date().getTime() / 1000 < decoded.exp) {
      return true;
    } else {
      return false;
    }
  }
}

export const getJwtRole = () => {
  const token = localStorage.getItem('backendToken');
  if (token === null) {
    return '';
  } else {
    const decoded = jwtDecode(token);
    return decoded.role;
  }
}