const BASE_URL = "http://127.0.0.1:8000/api/giveback/";

export const fetchGiveBackData = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch GiveBack data");
  return res.json();
};

export const fetchWorkshops = async () => {
  const data = await fetchGiveBackData();
  return data.filter(item => item.item_type === "workshop");
};

export const fetchGallery = async () => {
  const data = await fetchGiveBackData();
  return data.filter(item => item.item_type === "gallery");
};
