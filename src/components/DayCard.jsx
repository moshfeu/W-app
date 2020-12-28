import React from "react";
import "./DayCard.css";

const DayCard = (props) => {
  return (
    <div className="col-4 card-wrapper">
      <div className="card">
        {props.dt_txt && <h6>{props.dt_txt}</h6>}
        {props.weather[0].description && (
          <h6>{props.weather[0].description}</h6>
        )}
        {props.weather[0].icon && (
          <img
            src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`}
            alt="icon-img"
          />
        )}

        {props.main.temp && <h3> {Math.round(props.main.temp)} °C</h3>}
        <div className="min-max-temp">
          {props.main.temp_min && (
            <h6 className="mr-2">Low:{props.main.temp_min} </h6>
          )}
          {props.main.temp_max && <h6>High:{props.main.temp_max}</h6>}
        </div>
      </div>
    </div>
  );
};

export default DayCard;
