import React from "react";
import { API_KEY } from "../apiKeys";
import DayCard from "./DayCard";
import { withRouter } from "react-router-dom";

//type Props = {
//match: {
//params: {
// city: string,
// },
//},
//};
class ForecastContainer extends React.Component {
  state = {
    weatherForecast: null,
  };

  componentDidMount = () => {
    const city = this.props.match.params.city;
    const weatherURL = `//api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
    console.log(city);
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        //console.log("Data List Loaded", data.list);
        console.log(data);

        this.setState({ weatherForecast: data });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.weatherForecast && (
          <DayCard {...this.state.weatherForecast} showFiveDaysForcast={true} />
        )}
      </React.Fragment>
    );
  }
}
export default withRouter(ForecastContainer);
