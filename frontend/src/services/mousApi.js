// services/mousApi.js

const BASE_URL = "https://deploye-test-backend.onrender.com/api/";

export const getMousApi = async () => {
  const res = await fetch(`${BASE_URL}mous/`);
  if (!res.ok) {
    throw new Error("Failed to fetch MOUs");
  }
  return res.json();
};

export { BASE_URL };
