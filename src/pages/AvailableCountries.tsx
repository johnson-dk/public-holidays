import React, { useState, useEffect } from "react";
import * as API from "./../util/API";
import { countryInterface } from "./../types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


function AvailableCountries() {
  const [countries, setAvailableCountries] = useState([]);
  const fetchAvailableCountries = async () => {
    const response = await API.getAvailableCountries();
    setAvailableCountries(response);
  };
  useEffect(() => {
    fetchAvailableCountries();
  }, []);
  return (
    <div id="available-countries">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
      All available countries
      </Typography>
      <ul>
        {countries.map((country: countryInterface) => (
          <ListItem
            button
            key={country.key}
            component={Link}
            to={`/${country.value}/${country.key}`}
          >
            <ListItemText primary={country.value} />
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default AvailableCountries;
