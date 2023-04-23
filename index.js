// Find location
const locationSuccess = ({ coords }) => {
  const userLocation = {
    latitude: coords.latitude,
    longitude: coords.longitude,
  };
  getWeatherData(userLocation);
};

const locationError = (error) => {
  console.log(error);
  errorDomMessage();
};

navigator.geolocation.getCurrentPosition(locationSuccess, locationError);

// Make call
const getWeatherData = async (userLocation) => {
  const apiKey = "aadef87b858759eb3b16e4073cb59e64";
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${apiKey}`;
  const { data } = await axios.get(url);
  console.log(data.city.name);
  console.log(data.city.timezone);
  console.log(data.city.sunrise);
  console.log(data.city.sunset);

  console.log(data.list);
};

// Set DOM.

const setDom = (data) => {
  setHeaderContent(data.city);
};

const setHeaderContent = (city) => {};

const setWeatherContent = (data) => {};

const errorDomMessage = () => {};
