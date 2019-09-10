import React, { useState, useEffect } from "react";
import * as API from "./../util/API";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { countryInterface } from "./../types";

function AvailableCountries() {
  const [ countries, setAvailableCountries ] = useState([]);

  const fetchAvailableCountries = async () => {
    const response = await API.getAvailableCountries();
  
    setAvailableCountries(response);
  };
  
  //ts-lint ignore
  useEffect( () => { fetchAvailableCountries() }, [ ] );

  return (
    <div>
      <h1>All available countries</h1>
      <ul>
        {countries.map((country:countryInterface) => (
          <ListItem
            button
            key={country.key}
            component={Link}
            to={`/country/${country.key}`}
          >
            <ListItemText primary={country.value} />
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default AvailableCountries;
