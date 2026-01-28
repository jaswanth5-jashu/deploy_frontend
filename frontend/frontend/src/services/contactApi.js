const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const sendContactMessage = async (data) => {
  const res = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};
