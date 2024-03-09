const key = "24f4cabc9b1a10af6e3eeb4cc150a9ef";

const getWeatherByCoordinates = async (lat, lon) => {
  
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  
  let response = await fetch(url);
  let data = await response.json();
  
  return data;
};

const getWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&formatted=0`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export { getWeatherByCoordinates, getWeatherByCity };