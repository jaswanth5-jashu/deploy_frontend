// services/mousApi.js

const BASE_URL = "http://127.0.0.1:8000";

export const getMousApi = async () => {
  const res = await fetch(`${BASE_URL}/api/mous/`);
  if (!res.ok) {
    throw new Error("Failed to fetch MOUs");
  }
  return res.json();
};

export { BASE_URL };
