import React from "react";
import * as API from "./../util/API";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { countryInterface } from "./../types";


interface Props {}

interface State {
  countriesData: [];
}

class AvailableCountries extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      countriesData: []
    };
  }

  async componentDidMount() {
    let countriesDataResponse: any = await API.getAvailableCountries();
    this.setState({
      countriesData: countriesDataResponse
    });
  }

  render() {
    const countriesList = this.state.countriesData.map(function(country: countryInterface) {
      return (
        <ListItem button key={country.key} component={Link} to={`/country/${country.key}`}>
          <ListItemText  primary={country.value} />
        </ListItem>
      );
    });
    return (
      <div>
        <h1>All available countries</h1>
        <ul> {countriesList}</ul>
      </div>
    );
    
  }
}

export default AvailableCountries;
