const baseUrl =
  "http://api.weatherapi.com/v1/current.json?key=d68a9b837ea642a49b5155853233108";

const getWeatherData = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return await response.json();
};

export default getWeatherData;
