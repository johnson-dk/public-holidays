import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AvailableCountries from "./pages/AvailableCountries"
import Country from "./pages/Country";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AvailableCountries} />
          <Route path="/country/:id" component={Country} />
        </div>
      </Router>
    );
  }
}

export default App;
