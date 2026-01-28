const BASE_URL = "http://127.0.0.1:8000/api";

export const sendContactMessage = async (data) => {
  const res = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw result;
  return result;
};
