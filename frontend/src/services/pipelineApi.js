const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects/`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};
