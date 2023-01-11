import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    // console.log("comp did mount");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response.data.slip.advice);
        const { advice } = response.data.slip;
        console.log(advice);
        // this.setState({advice:advice})
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <>
        <h2 className="title-page">Quotes of the Day</h2>
        <div className="app">
          <div className="card">
            <h1>{advice}</h1>
            <div className="btn">
              <button
                type="button"
                className="more-btn"
                onClick={this.fetchAdvice}
              >
                Next Quote
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
