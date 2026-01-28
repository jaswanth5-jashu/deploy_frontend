const BASE_URL = "http://127.0.0.1:8000/api";

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects/`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
};