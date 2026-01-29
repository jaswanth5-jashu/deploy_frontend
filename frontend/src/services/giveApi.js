const BASE_URL = 'https://deploye-test-backend.onrender.com/api/giveback';

export const fetchGiveBackData = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch GiveBack data");
  }

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
