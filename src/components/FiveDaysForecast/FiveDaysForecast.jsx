import React, { Component } from "react";
import { connect } from 'react-redux';
import { API_KEY } from "../../apiKeys";
import { withRouter } from "react-router-dom";
import DayCard from "../DayCard";
import { fetchWeatherThunk } from '../../actions/actions';

class FiveDaysForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecast: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    this.getForecast();
  }

  getForecast = () => {
    const city = this.props.match.params.city;
    this.props.fetchWeather(city);
    // const weatherUrl = `//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    // fetch(weatherUrl)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //console.log("Data List Loaded", data.list);
    //     //  console.log(data);
    //     console.log("Data List Loaded", data.list);
    //     const dailyData = data.list.filter((reading) =>
    //       reading.dt_txt.includes("18:00:00")
    //     );
    //     this.setState({ weatherForecast: dailyData, dataLoaded: true });

    //     // this.setState({ weatherForecast: data.list, dataLoaded: true });
    //   });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* {this.state.dataLoaded &&
            this.state.weatherForecast.map((el, index) => (
              <DayCard {...el} showFiveDaysForcast={false} key={index} />
            ))} */}
            {
              this.props.items?.map(item => <DayCard {...item} showFiveDaysForcast={false} key={item.dt} />)
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(1111, state.weatherReducer);
  return {
    items: state.weatherReducer.weather
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeatherThunk(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FiveDaysForecast));
