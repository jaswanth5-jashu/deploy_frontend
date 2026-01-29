const BASE_URL = 'https://deploye-test-backend.onrender.com/api';

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
