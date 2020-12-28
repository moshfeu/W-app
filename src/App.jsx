import React from "react";
import { Provider } from "react-redux";
//import imagebackground from "./components/Img/sunbg.png";
//import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import FiveDaysForecast from "./components/FiveDaysForecast/FiveDaysForecast";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import store from "./store";
import "./App.css";
import logo from "./logoWM.png";
//import ForecastContainer from "./components/ForecastContainer";

type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    const history = createBrowserHistory();
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <div className="center">
              <img src={logo} alt="logo" />
            </div>
            <Switch>
              <Route exact path="/" component={Form} />

              <Route path="/city/:city" component={WeatherCard} />

              <Route path="/5daysforecast/:city" component={FiveDaysForecast} />
            </Switch>
            <Footer className="footer" />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
