const BASE_URL = 'https://deploye-test-backend.onrender.com/api';

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects/`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};
