import React from "react";
import { withRouter } from "react-router-dom";
import "./form.css";
type Props = {
  history: any,
};
type State = {
  txtCity: string,
};
class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      txtCity: "",
    };
  }
  render() {
    const { history } = this.props;

    return (
      <div>
        <form className="search-form">
          <input
            className="search-bar"
            onChange={(e) => {
              this.setState({ txtCity: e.target.value });
            }}
            type="text"
            name="city"
            placeholder="City.."
          />
          <button
            type="button"
            className="search-button"
            onClick={(e) => {
              const url = `/city/${this.state.txtCity}`;
              console.log(url);
              history.push(url);
            }}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
