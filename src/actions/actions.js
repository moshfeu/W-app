import { FETCH_WEATHER } from "./actionTypes";
import { API_KEY } from "../apiKeys";

const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

export const fetchWeatherThunk = (city) => (dispatch) => {
  const weatherUrl = `//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(weatherUrl)
    .then((res) => res.json())
    .then((data) => {
      //console.log("Data List Loaded", data.list);
      //  console.log(data);
      console.log("Data List Loaded", data.list);
      const dailyData = data.list.filter((reading) =>
        reading.dt_txt.includes("18:00:00")
      );
      dispatch(fetchWeatherSuccess(dailyData));
    });
};
