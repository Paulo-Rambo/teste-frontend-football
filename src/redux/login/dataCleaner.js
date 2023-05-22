export const locationList = [
  "Africa",
  "America",
  "Antarctica",
  "Artic",
  "Asia",
  "Atlantic",
  "Australia",
  "Europe",
  "Indian",
  "Pacific",
];

export function continentsCountry(data) {
  const newData = {
    Africa: [],
    America: [],
    Antarctica: [],
    Arctic: [],
    Asia: [],
    Atlantic: [],
    Australia: [],
    Europe: [],
    Indian: [],
    Pacific: [],
  };
  data.forEach((location) => {
    const continent = location.split("/")[0];
    if (newData.hasOwnProperty(continent)) {
      newData[continent].push(location.split("/")[1]);
    }
  });
  return newData;
}
