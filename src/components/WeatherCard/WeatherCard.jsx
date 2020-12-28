import React from "react";
import { withRouter } from "react-router-dom";
import "./WeatherCard.css";

type Props = {
  match: {
    params: {
      city: string,
    },
  },
};
type State = {
  temperature: string,
  temperature_min: string,
  temperature_max: string,
  city: string,
  description: string,
  //error: string,
};

const API_KEY = "27dde9ac6d030340af7a6d8d636d28e0";
class WeatherCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      temperature: null,
      temperature_min: null,
      temperature_max: null,
      city: null,
      description: null,
      // error: undefined,
    };
  }

  componentDidMount() {
    this.getWeather();
  }
  getWeather = async () => {
    const city = this.props.match.params.city;
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (data.main) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        temperature_min: data.main.temp_min,
        temperature_max: data.main.temp_max,
        city: data.name,
        description: data.weather[0].description,
        //error: " ",
      });
    } else {
      this.setState({
        temperature: null,
        temperature_min: null,
        temperature_max: null,
        city: null,
        description: undefined,
        error: "Can not find data ",
      });
    }
  };
  render() {
    const { history } = this.props;
    return (
      <div className="card-wrapper">
        <div className="card">
          {this.state.city && <h2>{this.state.city}</h2>}
          {this.state.description && <h6>{this.state.description}</h6>}
          {this.state.temperature && (
            <h3>{Math.round(this.state.temperature)} °C</h3>
          )}
          <div className="min-max-temp">
            {<h6 className="mr-2">Low:{this.state.temperature_min}</h6>}
            {this.state.temperature_max && (
              <h6>High:{this.state.temperature_max}</h6>
            )}
          </div>

          {this.state.error && <p>{this.state.error}</p>}
          {!this.state.error && (
            <button
              className="fivedays-button"
              onClick={(e) => {
                const url = `/5daysforecast/${this.state.city}`;
                console.log(url);
                history.push(url);
              }}
            >
              5days forecast
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherCard);
