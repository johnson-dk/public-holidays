import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as API from "./../util/API";
import { CountryInterface } from "./../types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function AvailableCountries() {
  const [countries, setAvailableCountries] = useState({
    all: [],
    filtered: [],
    loaded: false
  });

  const fetchAvailableCountries = async () => {
    const response = await API.getAvailableCountries();
    setAvailableCountries({
      all: response,
      filtered: response,
      loaded: true
    });
  };

  useEffect(() => {
    fetchAvailableCountries();
  }, []);

  const filterCountries = event => {
    const filteredcountries = countries.all.filter(
      (country: CountryInterface) => {
        return country.value.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
      }
    );
    setAvailableCountries(oldValues => ({
      ...oldValues,
      filtered: filteredcountries
    }));
  };

  return (
    <div id="available-countries">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        All available countries
      </Typography>
      <TextField
        onChange={filterCountries}
        id="outlined-search"
        label="Search field"
        type="search"
        fullWidth
        margin="normal"
        variant="outlined"
        helperText="Search is case sensitive"
      />
      {countries.filtered.length === 0 && countries.loaded && (
        <p>No results found(search is case sensitive)</p>
      )}
      <ul>
        {countries.filtered.map((country: CountryInterface) => (
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
