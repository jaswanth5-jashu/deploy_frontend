const BASE_URL = "http://127.0.0.1:8000/api";

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
